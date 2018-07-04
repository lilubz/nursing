import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '调试组件'
    },
    component: DemoComponent,
    children: [
      {
        path: '',
        redirectTo: 'table',
        pathMatch: 'full'
      },
      {
        path: 'table',
        component: TableComponent,
        data: {
          title: '表格'
        }
      },
      {
        path: 'tree',
        component: TreeComponent,
        data: {
          title: '节点树'
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
