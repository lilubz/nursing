import { NgModule, } from '@angular/core';
import { OlderComponent } from './older.component';
import { OlderRoutingModule, } from './older.routing';
import { InformationComponent } from './information/information.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { CheckInComponent } from './check-in/check-in.component';
import { GoOutComponent } from './go-out/go-out.component';
import { VisitComponent } from './visit/visit.component';
import { EventComponent } from './event/event.component';
import { CheckOutComponent } from './check-out/check-out.component';

// TODO: import components and services
// import { DemoComponent } from './demo/demo.component';
// import { DemoService } from './demo/demo.service';

@NgModule({
    declarations: [
        OlderComponent,
        InformationComponent,
        EvaluationComponent,
        CheckInComponent,
        GoOutComponent,
        VisitComponent,
        EventComponent,
        CheckOutComponent,
        // TODO: add components
        // DemoComponent
    ],
    imports: [
        OlderRoutingModule,
    ],
    providers: [
        // TODO: and services
        // DemoService
    ]
})
export class OlderModule { }

/*
请到 app.routing.ts 中添加如下路由（放在 { path: '**', redirectTo: 'layout/optimus-prime' } 之前）：

{
    path: 'older',
    loadChildren: './older/older.module#OlderModule',
    canActivate: [AuthGuard]
},

 */
