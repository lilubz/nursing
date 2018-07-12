import { Component, OnInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AdmissionService } from './admission.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'wit-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss'],
})
export class AdmissionComponent implements OnInit, AfterViewInit, AfterViewChecked {
  activeIndex = 1;
  constructor(private admissionService: AdmissionService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    console.log(this.activeIndex);
    this.admissionService.loadingObserver.subscribe(data => {
      this.activeIndex = data['index'];
      console.log(this.activeIndex);
      this.cdRef.detectChanges();
    })
  }

  ngAfterViewChecked() {

    this.cdRef.detectChanges();
  }
  ngAfterViewInit() {



  }



}
