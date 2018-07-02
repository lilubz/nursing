import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MoneyComponent } from './money.component';
import { MoneyRoutingModule } from './money-routing.module';
import { PrestoreComponent } from './prestore/prestore.component';
import { PaymentComponent } from './payment/payment.component';
import { SettlementComponent } from './settlement/settlement.component';
import { ArrearageComponent } from './arrearage/arrearage.component';
import { DepositComponent } from './deposit/deposit.component';
import { BillComponent } from './bill/bill.component';
import { InitialComponent } from './initial/initial.component';
import { TypeComponent } from './type/type.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MoneyRoutingModule,
  ],
  declarations: [
    MoneyComponent,
    PrestoreComponent,
    PaymentComponent,
    SettlementComponent,
    ArrearageComponent,
    DepositComponent,
    BillComponent,
    InitialComponent,
    TypeComponent,
  ]
})
export class MoneyModule { }
