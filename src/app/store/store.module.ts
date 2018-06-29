import { NgModule, } from '@angular/core';
import { StoreComponent } from './store.component';
import { StoreRoutingModule, } from './store.routing';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { PutInComponent } from './put-in/put-in.component';
import { PutOutComponent } from './put-out/put-out.component';
import { SupplierComponent } from './supplier/supplier.component';
import { QueryComponent } from './query/query.component';
import { ReviewComponent } from './review/review.component';
import { TransfersComponent } from './transfers/transfers.component';
import { SettingComponent } from './setting/setting.component';
import { WarningComponent } from './warning/warning.component';

// TODO: import components and services
// import { DemoComponent } from './demo/demo.component';
// import { DemoService } from './demo/demo.service';

@NgModule({
    declarations: [
        StoreComponent,
        WarehouseComponent,
        PutInComponent,
        PutOutComponent,
        SupplierComponent,
        QueryComponent,
        ReviewComponent,
        TransfersComponent,
        SettingComponent,
        WarningComponent,
        // TODO: add components
        // DemoComponent
    ],
    imports: [
        StoreRoutingModule,
    ],
    providers: [
        // TODO: and services
        // DemoService
    ]
})
export class StoreModule { }

/*
请到 app.routing.ts 中添加如下路由（放在 { path: '**', redirectTo: 'layout/optimus-prime' } 之前）：

{
    path: 'store',
    loadChildren: './store/store.module#StoreModule',
    canActivate: [AuthGuard]
},

 */
