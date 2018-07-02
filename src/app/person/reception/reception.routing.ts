import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultComponent } from './consult/consult.component';
import { VisitComponent } from './visit/visit.component';
import { OrderComponent } from './order/order.component';
import { TryInComponent } from './try-in/try-in.component';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { BedComponent } from './bed/bed.component';

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
      {
        path: 'visit',
        component: VisitComponent,
        data: {
          title: '来访登记'
        }
      },
      {
        path: 'order',
        component: OrderComponent,
        data: {
          title: '预约登记'
        }
      },
      {
        path: 'try-in',
        component: TryInComponent,
        data: {
          title: '试住登记'
        }
      },
      {
        path: 'check-in',
        component: CheckInComponent,
        data: {
          title: '入住登记'
        }
      },
      {
        path: 'check-out',
        component: CheckOutComponent,
        data: {
          title: '退住登记'
        }
      },
      {
        path: 'bed',
        component: BedComponent,
        data: {
          title: '床位查询'
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
