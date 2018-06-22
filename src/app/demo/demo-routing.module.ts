import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '调试组件'
    },
    component: DemoComponent,
    children: [
      {
        path: 'table',
        component: TableComponent,
        data: {
          title: '表格'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
