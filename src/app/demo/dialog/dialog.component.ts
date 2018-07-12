import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'wit-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  items: MenuItem[];
    
  
  activeIndex: number = 1;
  constructor() { }

  ngOnInit() {
    this.items = [{
      label: 'Personal',
      command: (event: any) => {
          this.activeIndex = 0;
      }
  },
  {
      label: 'Seat',
      command: (event: any) => {
          this.activeIndex = 1;
      }
  },
  {
      label: 'Payment',
      command: (event: any) => {
          this.activeIndex = 2;
      }
  },
  {
      label: 'Confirmation',
      command: (event: any) => {
          this.activeIndex = 3;
      }
  }
];
  }

}
