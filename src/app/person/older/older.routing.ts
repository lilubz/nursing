import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OlderComponent, } from './older.component';
import { InformationComponent } from './information/information.component';
import { EventComponent } from './event/event.component';
import { CheckInComponent } from './check-in/check-in.component';
import { GoOutComponent } from './go-out/go-out.component';
import { VisitComponent } from './visit/visit.component';
import { CheckOutComponent } from './check-out/check-out.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '老人管理'
    },
    children: [
      {
        path: '',
        redirectTo: 'information',
        pathMatch: 'full'
      },
      {
        path: 'information',
        component: InformationComponent,
        data: {
          title: '咨询登记'
        }
      },
      {
        path: 'evaluation',
        component: EventComponent,
        data: {
          title: '评估管理'
        }
      },
      {
        path: 'check-in',
        component: CheckInComponent,
        data: {
          title: '入住管理'
        }
      },
      {
        path: 'go-out',
        component: GoOutComponent,
        data: {
          title: '外出登记'
        }
      },
      {
        path: 'visit',
        component: VisitComponent,
        data: {
          title: '探视来访'
        }
      },
      {
        path: 'event',
        component: EventComponent,
        data: {
          title: '老人事件'
        }
      },
      {
        path: 'check-out',
        component: CheckOutComponent,
        data: {
          title: '退住办理'
        }
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'older/consult',
    // pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OlderRoutingModule { }
