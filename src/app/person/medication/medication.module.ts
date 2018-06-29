import { NgModule, } from '@angular/core';
import { MedicationComponent } from './medication.component';
import { MedicationRoutingModule, } from './medication.routing';
import { RegisterComponent } from './register/register.component';

// TODO: import components and services
// import { DemoComponent } from './demo/demo.component';
// import { DemoService } from './demo/demo.service';

@NgModule({
    declarations: [
        MedicationComponent,
        RegisterComponent,
        // TODO: add components
        // DemoComponent
    ],
    imports: [
        MedicationRoutingModule,
    ],
    providers: [
        // TODO: and services
        // DemoService
    ]
})
export class MedicationModule { }

/*
请到 app.routing.ts 中添加如下路由（放在 { path: '**', redirectTo: 'layout/optimus-prime' } 之前）：

{
    path: 'medication',
    loadChildren: './medication/medication.module#MedicationModule',
    canActivate: [AuthGuard]
},

 */
