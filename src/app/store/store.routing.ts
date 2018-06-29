import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent, } from './store.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { PutInComponent } from './put-in/put-in.component';
import { PutOutComponent } from './put-out/put-out.component';
import { SupplierComponent } from './supplier/supplier.component';
import { QueryComponent } from './query/query.component';
import { ReviewComponent } from './review/review.component';
import { TransfersComponent } from './transfers/transfers.component';
import { SettingComponent } from './setting/setting.component';
import { WarningComponent } from './warning/warning.component';

// TODO: import components
// import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '库存管理'
    },
    component: StoreComponent,
    children: [
      {
        path: '',
        redirectTo: 'warehouse',
        pathMatch: 'full'
      },
      {
        path: 'warehouse',
        component: WarehouseComponent,
        data: {
          title: '仓库管理'
        }
      },
      {
        path: 'put-in',
        component: PutInComponent,
        data: {
          title: '入库管理'
        }
      },
      {
        path: 'put-out',
        component: PutOutComponent,
        data: {
          title: '出库管理'
        }
      },
      {
        path: 'supplier',
        component: SupplierComponent,
        data: {
          title: '供应商管理'
        }
      },
      {
        path: 'query',
        component: QueryComponent,
        data: {
          title: '库存查询'
        }
      },
      {
        path: 'review',
        component: ReviewComponent,
        data: {
          title: '库存盘点'
        }
      },
      {
        path: 'transfers',
        component: TransfersComponent,
        data: {
          title: '物资调拨'
        }
      },
      {
        path: 'setting',
        component: SettingComponent,
        data: {
          title: '物资设置'
        }
      },
      {
        path: 'warning',
        component: WarningComponent,
        data: {
          title: '库存预警'
        }
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'store/warehouse',
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreRoutingModule { }
