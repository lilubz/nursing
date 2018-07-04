import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { PersonalComponent } from './personal/personal.component';
import { LogComponent } from './log/log.component';
import { SystemComponent } from './system.component';
import { SystemRoutingModule } from './system-routing.module';
import { SystemService } from './system.service';
import { PermissionListComponent } from './permission/permission-list/permission-list.component';
import { PermissionDetailComponent } from './permission/permission-detail/permission-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
    AccountComponent,
    PersonalComponent,
    LogComponent,
    SystemComponent,
    PermissionListComponent,
    PermissionDetailComponent,
  ],
  providers: [SystemService]
})
export class SystemModule { }
