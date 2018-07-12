import { Component, OnInit } from '@angular/core';
import { zh_CN } from '../../../../common/date-localization';

@Component({
  selector: 'wit-consult-detail',
  templateUrl: './consult-detail.component.html',
  styleUrls: ['./consult-detail.component.scss']
})
export class ConsultDetailComponent implements OnInit {
  dropdown = {
    status: [
      {
        label:'咨询',
        value:'0'
      },
      {
        label:'来访',
        value:'1'
      },
      {
        label:'预约',
        value:'2'
      },
      {
        label:'试住',
        value:'3'
      },
      {
        label:'正式入住',
        value:'4'
      },
      {
        label:'退住',
        value:'5'
      },
      {
        label:'重新入住',
        value:'6'
      },
      {
        label:'其他',
        value:'7'
      },
    ]
  }
  cars=[];
  zh=zh_CN;
  constructor() { }

  ngOnInit() {
    this.cars = [
      { brand: 'VW', 'year': 2012, color: 'Orange', vin: 'dsad231ff', },
      { brand: 'Audi', 'year': 2011, color: 'Black', vin: 'gwregre345哈哈哈哈哈哈哈哈哈哈哈哈' },
      { brand: 'Renault', 'year': 2005, color: 'Gray', vin: 'h354htr' },
      { brand: 'BMW', 'year': 2003, color: 'Blue', vin: 'j6w54qgh' },
      { brand: 'Mercedes', 'year': 1995, color: 'Orange', vin: 'hrtwy34' },
      { brand: 'Volvo', 'year': 2005, color: 'Black', vin: 'jejtyj' },
      { brand: 'Honda', 'year': 2012, color: 'Yellow', vin: 'g43gr' },
      { brand: 'Jaguar', 'year': 2013, color: 'Orange', vin: 'greg34' },
      { brand: 'Ford', 'year': 2000, color: 'Black', vin: 'h54hw5' },
      { brand: 'Fiat', 'year': 2013, color: 'Red', vin: '245t2s' },
      { brand: 'VW', 'year': 2012, color: 'Orange', vin: 'dsad231ff' },
      { brand: 'Audi', 'year': 2011, color: 'Black', vin: 'gwregre345' },
      { brand: 'Renault', 'year': 2005, color: 'Gray', vin: 'h354htr' },
      { brand: 'BMW', 'year': 2003, color: 'Blue', vin: 'j6w54qgh' },
      { brand: 'Mercedes', 'year': 1995, color: 'Orange', vin: 'hrtwy34' },
      { brand: 'Volvo', 'year': 2005, color: 'Black', vin: 'jejtyj' },
      { brand: 'Honda', 'year': 2012, color: 'Yellow', vin: 'g43gr' },
      { brand: 'Jaguar', 'year': 2013, color: 'Orange', vin: 'greg34' },
      { brand: 'Ford', 'year': 2000, color: 'Black', vin: 'h54hw5' },
      { brand: 'Fiat', 'year': 2013, color: 'Red', vin: '245t2s' }
    ];
  }

}
