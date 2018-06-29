import { NgModule, } from '@angular/core';
import { ReceptionComponent } from './reception.component';
import { ReceptionRoutingModule, } from './reception.routing';
import { ConsultComponent } from './consult/consult.component';

// TODO: import components and services
// import { DemoComponent } from './demo/demo.component';
// import { DemoService } from './demo/demo.service';

@NgModule({
    declarations: [
        ReceptionComponent,
        ConsultComponent,
        // TODO: add components
        // DemoComponent
    ],
    imports: [
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
