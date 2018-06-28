import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemComponent } from './system.component';
import { AccountComponent } from './account/account.component';
import { PersonalComponent } from './personal/personal.component';
import { PermissionComponent } from './permission/permission.component';
import { LogComponent } from './log/log.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: '基础档案'
    },
    component: SystemComponent,
    children: [
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full'
      },
      {
        path: 'account',
        component: AccountComponent,
        data: {
          title: '账号管理'
        }
      },
      {
        path: 'personal',
        component: PersonalComponent,
        data: {
          title: '个人中心'
        }
      },
      {
        path: 'permission',
        component: PermissionComponent,
        data: {
          title: '权限设置'
        }
      },
      {
        path: 'log',
        component: LogComponent,
        data: {
          title: '操作日志'
        }
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'system/account',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
