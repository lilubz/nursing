import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultComponent } from './consult/consult.component';

// TODO: import components
// import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '接待管理'
    },
    children: [
      {
        path: '',
        redirectTo: 'consult',
        pathMatch: 'full'
      },
      {
        path: 'consult',
        component: ConsultComponent,
        data: {
          title: '咨询登记'
        }
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'reception/consult',
    // pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionRoutingModule { }
