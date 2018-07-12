import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdmissionService } from '../admission.service';

@Component({
  selector: 'wit-admission-older',
  templateUrl: './admission-older.component.html',
  styleUrls: ['./admission-older.component.scss']
})
export class AdmissionOlderComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private routerInfo: ActivatedRoute,
    private AdmissionService: AdmissionService,
  ) { }

  ngOnInit() {
    this.AdmissionService.save(2);
  }
  ngOnDestroy() {
    // alert('确定离开本页面吗')
  }
  submit() {
    this.router.navigate(['/person/reception/consult/checkIn/list']);
  }

}
