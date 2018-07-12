import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitComponent } from './visit/visit.component';
import { OrderComponent } from './order/order.component';
import { TryInComponent } from './try-in/try-in.component';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { BedComponent } from './bed/bed.component';
import { ConsultDetailComponent } from './consult/consult-detail/consult-detail.component';
import { ConsultListComponent } from './consult/consult-list/consult-list.component';
import { ConsultUpdateComponent } from './consult/consult-update/consult-update.component';
import { ConsultAddComponent } from './consult/consult-add/consult-add.component';
import { AdmissionComponent } from '../../shared/admission/admission.component';
import { AdmissionNavbarComponent } from '../../shared/admission/admission-navbar/admission-navbar.component';
import { AdmissionOlderComponent } from '../../shared/admission/admission-older/admission-older.component';
import { AdmissionHealthComponent } from '../../shared/admission/admission-health/admission-health.component';

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
        data: {
          title: '咨询登记'
        },
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: ConsultListComponent,
            data: {
              title: '咨询登记'
            }
          },
          {
            path: 'detail',
            component: ConsultDetailComponent,
            data: {
              title: '查看'
            }
          },
          {
            path: 'add',
            component: ConsultAddComponent,
            data: {
              title: '新增'
            }
          },
          {
            path: 'update',
            component: ConsultUpdateComponent,
            data: {
              title: '更改'
            }
          },
          {
            path: 'checkIn',
            component:AdmissionComponent,
            data: {
              title: '转入住'
            },
            children: [
              {
                path: '',
                redirectTo: 'older',
                pathMatch: 'full'
              },
              {
                path: 'older',
                component: AdmissionOlderComponent,
                data: {
                  title: '更改'
                }
              },
              {
                path: 'list',
                component: AdmissionNavbarComponent,
                data: {
                  title: '更改'
                }
              },
              {
                path: 'health',
                component: AdmissionHealthComponent,
                data: {
                  title: '更改'
                }
              },
            ]
          },
        ]
      },
      {
        path: 'visit',
        data: {
          title: '来访登记'
        },
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: ConsultListComponent,
            data: {
              title: '来访登记'
            }
          },
          {
            path: 'detail',
            component: ConsultDetailComponent,
            data: {
              title: '查看'
            }
          },
          {
            path: 'add',
            component: ConsultAddComponent,
            data: {
              title: '新增'
            }
          },
          {
            path: 'update',
            component: ConsultUpdateComponent,
            data: {
              title: '更改'
            }
          },

        ]
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
