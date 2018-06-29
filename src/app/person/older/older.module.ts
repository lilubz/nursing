import { NgModule, } from '@angular/core';
import { OlderComponent } from './older.component';
import { OlderRoutingModule, } from './older.routing';
import { InformationComponent } from './information/information.component';

// TODO: import components and services
// import { DemoComponent } from './demo/demo.component';
// import { DemoService } from './demo/demo.service';

@NgModule({
    declarations: [
        OlderComponent,
        InformationComponent,
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
