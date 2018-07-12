import { Component, OnInit } from '@angular/core';
import { AdmissionService } from '../admission.service';

@Component({
  selector: 'wit-admission-health',
  templateUrl: './admission-health.component.html',
  styleUrls: ['./admission-health.component.scss']
})
export class AdmissionHealthComponent implements OnInit {

  constructor(
    private AdmissionService:AdmissionService
  ) { }

  ngOnInit() {
    this.AdmissionService.save(3);
  }

}
