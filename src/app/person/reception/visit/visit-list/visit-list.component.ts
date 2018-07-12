import { Component, OnInit } from '@angular/core';
import { zh_CN } from '../../../../common/date-localization';

@Component({
  selector: 'wit-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.scss']
})
export class VisitListComponent implements OnInit {
  selected;
  zh = zh_CN;
  dropdown = {
    visitor: [
      { label: '请选择', value: '0' },
    ],
    data: [
      { label: '咨询人姓名', value: '1' },
      { label: '老人姓名', value: '2' },
      { label: '联系电话', value: '3' },
      { label: '身份证号', value: '4' },
      { label: '经办人', value: '5' },

    ]
  }
  cars;
  totalRecords = 999;
  cols: any[];
  selectedCar1;
  loading: boolean;
  constructor() { }

  ngOnInit() {
    this.dropdown.visitor = this.dropdown.visitor.concat(this.dropdown.data);
    console.log(this.dropdown.visitor);
    this.cols = [
      { field: '咨询日期', header: '咨询日期' },
      { field: '咨询人姓名', header: '咨询人姓名' },
      { field: '老人姓名', header: '老人姓名' },
      { field: '身份证号', header: '身份证号' },
      { field: '联系电话', header: '联系电话' },
      { field: '咨询方式', header: '咨询方式' },
      { field: '咨询意向', header: '咨询意向' },
      { field: '经办人', header: '经办人' }
    ];
    this.loading = true;
  }
  onPageChange(event) {
    this.loading = true;

    setTimeout(() => {
      // this.cars = this.datasource.slice(event.first, (event.first + event.rows));
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
      this.loading = false;
    }, 1000);
  }
  add() {

  }
  delete(data) {
    console.log(data);

  }
  queryDetail(data) {
    console.log(data);

  }
  update(data) {
    console.log(data);

  }
  checkIn(data) {
    console.log(data);

  }

}
