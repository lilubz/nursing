import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person.component';
import { AgedComponent } from './aged/aged.component';
import { BasicComponent } from './aged/basic/basic.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '基础档案'
    },
    component: PersonComponent,
    children: [
      {
        path: 'aged',
        component: AgedComponent,
        data: {
          title: '老人管理'
        },
        children: [
          {
            path: 'basic',
            component: BasicComponent,
            data: {
              title: '基本信息'
            }
          }
        ]
      }
    ]
  },
  {
    path: '**',
    component: PersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
