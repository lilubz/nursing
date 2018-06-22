import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { TableComponent } from './table/table.component';
import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DemoRoutingModule,
  ],
  declarations: [
    DemoComponent,
    TableComponent,
  ]
})
export class DemoModule { }
