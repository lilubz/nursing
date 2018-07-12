import { Component, OnInit } from '@angular/core';
import { AdmissionService } from '../admission.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wit-admission-navbar',
  templateUrl: './admission-navbar.component.html',
  styleUrls: ['./admission-navbar.component.scss']
})
export class AdmissionNavbarComponent implements OnInit {

  constructor(
    private AdmissionService: AdmissionService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.AdmissionService.save(3);
  }
  submit() {
    this.router.navigate(['/person/reception/consult/checkIn/health']);
  }
}
