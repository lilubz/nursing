import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { PersonalComponent } from './personal/personal.component';
import { PermissionComponent } from './permission/permission.component';
import { LogComponent } from './log/log.component';
import { SystemComponent } from './system.component';
import { SystemRoutingModule } from './system-routing.module';
import { SystemService } from './system.service';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule
  ],
  declarations: [
    AccountComponent,
    PersonalComponent,
    PermissionComponent,
    LogComponent,
    SystemComponent,
  ],
  providers: [SystemService]
})
export class SystemModule { }
