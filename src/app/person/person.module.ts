import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { PersonRoutingModule } from './person-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PersonRoutingModule,
  ],
  declarations: [
    PersonComponent,
  ]
})
export class PersonModule { }
