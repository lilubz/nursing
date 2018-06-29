import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wit-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  @Input() subMenu;
  constructor() { }

  ngOnInit() {
  }

}
