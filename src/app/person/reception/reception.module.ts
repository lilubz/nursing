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
    // TODO: add components
    // DemoComponent
  ],
  imports: [
    SharedModule,
    ReceptionRoutingModule,
  ],
  providers: [
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
