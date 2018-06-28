import {
  Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wit-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() mainMenu;
  @Output() mainMenuClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickMenu(currentMenu) {
    this.mainMenuClick.emit(currentMenu);
  }

}
