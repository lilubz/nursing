import { Component, OnInit } from '@angular/core';
import { SystemService } from './system.service';

@Component({
  selector: 'wit-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  constructor(
    private _service: SystemService
  ) { }

  ngOnInit() {
    this._service.getPermissions({}).subscribe(res => {
      console.log(res);
    },
    error => console.log('error:', error));
  }

}
