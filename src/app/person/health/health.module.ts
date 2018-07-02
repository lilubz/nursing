import { NgModule, } from '@angular/core';
import { HealthComponent } from './health.component';
import { HealthRoutingModule, } from './health.routing';
import { MedicalComponent } from './medical/medical.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { RecordComponent } from './record/record.component';
import { DailyComponent } from './daily/daily.component';
import { InputComponent } from './input/input.component';

// TODO: import components and services
// import { DemoComponent } from './demo/demo.component';
// import { DemoService } from './demo/demo.service';

@NgModule({
    declarations: [
        HealthComponent,
        MedicalComponent,
        EvaluationComponent,
        RecordComponent,
        DailyComponent,
        InputComponent,
        // TODO: add components
        // DemoComponent
    ],
    imports: [
        HealthRoutingModule,
    ],
    providers: [
        // TODO: and services
        // DemoService
    ]
})
export class HealthModule { }

/*
请到 app.routing.ts 中添加如下路由（放在 { path: '**', redirectTo: 'layout/optimus-prime' } 之前）：

{
    path: 'health',
    loadChildren: './health/health.module#HealthModule',
    canActivate: [AuthGuard]
},

 */
