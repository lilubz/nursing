import { Component, OnInit } from '@angular/core';
import { PermissionService } from './core/permission.service';


@Component({
  selector: 'wit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private permissionService: PermissionService
  ) {}

  ngOnInit() {
    this.permissionService.ngOnInit();
    this.permissionService.menuObserver.subscribe();
  }
}
