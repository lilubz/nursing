import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wit-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() sideMenu;
  constructor() { }

  ngOnInit() {
  }

}
