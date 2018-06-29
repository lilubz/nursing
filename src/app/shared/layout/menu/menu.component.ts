import {
  Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wit-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() mainMenu;

  constructor() { }

  ngOnInit() {
  }

}
