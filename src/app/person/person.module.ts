import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { PersonRoutingModule } from './person-routing.module';
import { BasicComponent } from './aged/basic/basic.component';
import { AgedComponent } from './aged/aged.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PersonRoutingModule,
    SharedModule,
  ],
  declarations: [
    PersonComponent,
    BasicComponent,
    AgedComponent,
  ]
})
export class PersonModule { }
