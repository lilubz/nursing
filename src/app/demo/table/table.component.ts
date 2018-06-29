import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { LoadingService } from '../../core/loading.service';
import { CommonRequestService } from '../../core/common-request.service';
import 'rxjs/add/operator/do';

@Component({
  selector: 'wit-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  datasource;

  cars;

  totalRecords = 999;

  cols: any[];

  selectedCar1;
  loading: boolean;
  constructor(
    private loadingService: LoadingService,
    private messigeService: MessageService,
    private commonRequest: CommonRequestService
  ) { }

  ngOnInit() {

    this.cols = [
      { field: 'vim', header: 'Vim' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' },
      { field: 'vim', header: 'Vim' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
    

    this.loading = true;
  }

  onPageChange(event) {
    this.loading = true;
    console.log(event.rows);
    console.log(event.first);
    
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
  mess() {
    // this.messigeService.clear();
    console.log(this.selectedCar1);
    
    this.messigeService.add({ severity: 'success', summary: '响应消息', detail: 'success', });
    // this.messigeService.add({ severity: 'info', summary: '响应消息', detail: 'info', });
    // this.messigeService.add({ severity: 'warn', summary: '响应消息', detail: 'warning', });
    // this.messigeService.add({ severity: 'error', summary: '响应消息', detail: 'error', });
  }



  test() {
  }

}
