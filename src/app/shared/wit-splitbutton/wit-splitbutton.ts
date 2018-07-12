import {NgModule,Component,ElementRef,AfterViewInit,AfterViewChecked,OnDestroy,Input,Output,ContentChildren,EventEmitter,QueryList,Renderer2,ChangeDetectorRef,ViewChild} from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations';
import {CommonModule} from '@angular/common';
import {DomHandler} from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import {Router} from '@angular/router';
import {RouterModule} from '@angular/router';

@Component({
    selector: 'wit-splitButton',
    templateUrl: './wit-splitbutton.html',
    animations: [
        trigger('overlayState', [
            state('hidden', style({
                opacity: 0
            })),
            state('visible', style({
                opacity: 1
            })),
            transition('visible => hidden', animate('400ms ease-in')),
            transition('hidden => visible', animate('400ms ease-out'))
        ])
    ],
    providers: [DomHandler]
})
export class SplitButton implements AfterViewInit,AfterViewChecked,OnDestroy {

    @Input() model: MenuItem[];

    @Input() icon: string;

    @Input() iconPos: string = 'left';
        
    @Input() label: string;
    
    @Output() onClick: EventEmitter<any> = new EventEmitter();
    
    @Output() onDropdownClick: EventEmitter<any> = new EventEmitter();
    
    @Input() style: any;
    
    @Input() styleClass: string;
    
    @Input() menuStyle: any;
    
    @Input() menuStyleClass: string;
    
    @Input() disabled: boolean;

    @Input() tabindex: number;
    
    @Input() appendTo: any;
    
    @Input() dir: string;

    @ViewChild('container') containerViewChild: ElementRef;
    
    @ViewChild('defaultbtn') buttonViewChild: ElementRef;
    
    @ViewChild('overlay') overlayViewChild: ElementRef;
                
    public menuVisible: boolean = false;
    
    public documentClickListener: any;
    
    public dropdownClick: boolean;
    
    public shown: boolean;

    constructor(public el: ElementRef, public domHandler: DomHandler, public renderer: Renderer2, public router: Router, public cd: ChangeDetectorRef) {}
        
    ngAfterViewInit() {
        if(this.appendTo) {
            if(this.appendTo === 'body')
                document.body.appendChild(this.overlayViewChild.nativeElement);
            else
                this.domHandler.appendChild(this.overlayViewChild.nativeElement, this.appendTo);
        }
    }
    
    ngAfterViewChecked() {
        if(this.shown) {
            this.onShow();
            this.shown = false;
        }
    }
    
    onDefaultButtonClick(event: Event) {
        this.onClick.emit(event);
    }
    
    itemClick(event: Event, item: MenuItem) {
        if(item.disabled) {
            event.preventDefault();
            return;
        }
        
        if(!item.url) {
            event.preventDefault();
        }
        
        if(item.command) {            
            item.command({
                originalEvent: event,
                item: item
            });
        }
        
        this.menuVisible = false;
    }
    
    show() {
        this.shown = true;
        this.menuVisible= !this.menuVisible;
        this.alignPanel(); 
        this.overlayViewChild.nativeElement.style.zIndex = String(++DomHandler.zindex);
    }
    
    onShow() {
        this.alignPanel();
        this.bindDocumentClickListener();
    }
    
    onDropdownButtonClick(event: Event) {
        this.onDropdownClick.emit(event);
        this.dropdownClick = true;
        this.show();
    }
    
    alignPanel() {
        if(this.appendTo)
            this.domHandler.absolutePosition(this.overlayViewChild.nativeElement, this.containerViewChild.nativeElement);
        else
            this.domHandler.relativePosition(this.overlayViewChild.nativeElement, this.containerViewChild.nativeElement);
    }
    
    bindDocumentClickListener() {
        if(!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', () => {
                if(this.dropdownClick) {
                    this.dropdownClick = false;
                }
                else {
                    this.menuVisible = false;
                    this.unbindDocumentClickListener();
                    this.cd.markForCheck();
                }
            });
        }
    }
    
    unbindDocumentClickListener() {
        if(this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }   
         
    ngOnDestroy() {
        this.unbindDocumentClickListener();
    }
}

@NgModule({
    imports: [CommonModule,ButtonModule,RouterModule],
    exports: [SplitButton,ButtonModule,RouterModule],
    declarations: [SplitButton]
})
export class WitSplitButtonModule { }
