import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { TableComponent } from './table/table.component';
import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TreeComponent } from './tree/tree.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DemoRoutingModule,
  ],
  declarations: [
    DemoComponent,
    TableComponent,
    TreeComponent,
    DialogComponent,
  ]
})
export class DemoModule { }
