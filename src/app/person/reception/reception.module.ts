import { NgModule, } from '@angular/core';
import { ReceptionComponent } from './reception.component';
import { ReceptionRoutingModule, } from './reception.routing';
import { ConsultComponent } from './consult/consult.component';
import { VisitComponent } from './visit/visit.component';
import { OrderComponent } from './order/order.component';
import { TryInComponent } from './try-in/try-in.component';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { BedComponent } from './bed/bed.component';
import { SharedModule } from '../../shared/shared.module';
import { ConsultDetailComponent } from './consult/consult-detail/consult-detail.component';
import { ConsultListComponent } from './consult/consult-list/consult-list.component';
import { ConsultUpdateComponent } from './consult/consult-update/consult-update.component';
import { VisitListComponent } from './visit/visit-list/visit-list.component';
import { VisitDetailComponent } from './visit/visit-detail/visit-detail.component';
import { VisitUpdateComponent } from './visit/visit-update/visit-update.component';
import { VisitAddComponent } from './visit/visit-add/visit-add.component';
import { ConsultAddComponent } from './consult/consult-add/consult-add.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { AdmissionService } from '../../shared/admission/admission.service';

// TODO: import components and services
// import { DemoComponent } from './demo/demo.component';
// import { DemoService } from './demo/demo.service';

@NgModule({
  declarations: [
    ReceptionComponent,
    ConsultComponent,
    VisitComponent,
    OrderComponent,
    TryInComponent,
    CheckInComponent,
    CheckOutComponent,
    BedComponent,
    ConsultDetailComponent,
    ConsultListComponent,
    ConsultUpdateComponent,
    ConsultAddComponent,
    VisitListComponent,
    VisitDetailComponent,
    VisitUpdateComponent,
    VisitAddComponent,
    OrderListComponent,
    OrderDetailComponent,
    // TODO: add components
    // DemoComponent
  ],
  imports: [
    SharedModule,
    ReceptionRoutingModule,
  ],
  providers: [
    AdmissionService
    // TODO: and services
    // DemoService
  ]
})
export class ReceptionModule { }

/*
请到 app.routing.ts 中添加如下路由（放在 { path: '**', redirectTo: 'layout/optimus-prime' } 之前）：

{
    path: 'reception',
    loadChildren: './reception/reception.module#ReceptionModule',
    canActivate: [AuthGuard]
},

 */
