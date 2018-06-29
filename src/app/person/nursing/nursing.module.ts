import { NgModule, } from '@angular/core';
import { NursingComponent } from './nursing.component';
import { NursingRoutingModule, } from './nursing.routing';
import { LevelComponent } from './level/level.component';

// TODO: import components and services
// import { DemoComponent } from './demo/demo.component';
// import { DemoService } from './demo/demo.service';

@NgModule({
    declarations: [
        NursingComponent,
        LevelComponent,
        // TODO: add components
        // DemoComponent
    ],
    imports: [
        NursingRoutingModule,
    ],
    providers: [
        // TODO: and services
        // DemoService
    ]
})
export class NursingModule { }

/*
请到 app.routing.ts 中添加如下路由（放在 { path: '**', redirectTo: 'layout/optimus-prime' } 之前）：

{
    path: 'nursing',
    loadChildren: './nursing/nursing.module#NursingModule',
    canActivate: [AuthGuard]
},

 */
