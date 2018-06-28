import { Component, OnInit } from '@angular/core';
import { routerTree } from '../../common/routerTree';

@Component({
  selector: 'wit-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  routerTree = routerTree;
  mainMenu = [];
  sideMenu = [];

  constructor() { }

  ngOnInit() {
    this.mainMenu = this.routerTree;
  }

  onMainMenuClick(event) {
    this.sideMenu = event.children;
  }

}
