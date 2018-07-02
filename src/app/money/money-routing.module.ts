import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoneyComponent } from './money.component';
import { PrestoreComponent } from './prestore/prestore.component';
import { PaymentComponent } from './payment/payment.component';
import { SettlementComponent } from './settlement/settlement.component';
import { ArrearageComponent } from './arrearage/arrearage.component';
import { DepositComponent } from './deposit/deposit.component';
import { BillComponent } from './bill/bill.component';
import { InitialComponent } from './initial/initial.component';
import { TypeComponent } from './type/type.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '费用管理'
    },
    component: MoneyComponent,
    children: [
      {
        path: '',
        redirectTo: 'prestore',
        pathMatch: 'full'
      },
      {
        path: 'prestore',
        component: PrestoreComponent,
        data: {
          title: '预存管理'
        }
      },
      {
        path: 'payment',
        component: PaymentComponent,
        data: {
          title: '入住缴费'
        }
      },
      {
        path: 'settlement',
        component: SettlementComponent,
        data: {
          title: '退住结算'
        }
      },
      {
        path: 'arrearage',
        component: ArrearageComponent,
        data: {
          title: '欠费管理'
        }
      },
      {
        path: 'deposit',
        component: DepositComponent,
        data: {
          title: '押金管理'
        }
      },
      {
        path: 'bill',
        component: BillComponent,
        data: {
          title: '费用流水'
        }
      },
      {
        path: 'initial',
        component: InitialComponent,
        data: {
          title: '初始费用设置'
        }
      },
      {
        path: 'type',
        component: TypeComponent,
        data: {
          title: '费用类别设置'
        }
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'money/prestore',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoneyRoutingModule { }
