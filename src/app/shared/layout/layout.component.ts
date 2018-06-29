import { Component, OnInit } from '@angular/core';
import { PermissionService } from '../../core/permission.service';

@Component({
  selector: 'wit-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  mainMenu = [];
  sideMenu = [];
  subMenu = [];

  constructor(
    private permissionService: PermissionService
  ) { }

  ngOnInit() {
    this.mainMenu = this.permissionService.mainMenu;
    this.sideMenu = this.permissionService.sideMenu;
    this.subMenu = this.permissionService.subMenu;
    this.permissionService.menuObserver.subscribe(
      next => {
        this.mainMenu = next['mainMenu'];
        this.sideMenu = next['sideMenu'];
        this.subMenu = next['subMenu'];
      }
    );
  }
}
