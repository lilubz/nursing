import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NursingComponent, } from './nursing.component';
import { LevelComponent } from './level/level.component';
import { TypeComponent } from './type/type.component';
import { SetComponent } from './set/set.component';
import { CarerComponent } from './carer/carer.component';
import { TaskComponent } from './task/task.component';
import { RecordComponent } from './record/record.component';
import { ChangeComponent } from './change/change.component';

// TODO: import components
// import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '护理管理'
    },
    children: [
      {
        path: '',
        redirectTo: 'level',
        pathMatch: 'full'
      },
      {
        path: 'level',
        component: LevelComponent,
        data: {
          title: '护理级别'
        }
      },
      {
        path: 'type',
        component: TypeComponent,
        data: {
          title: '项目类型'
        }
      },
      {
        path: 'set',
        component: SetComponent,
        data: {
          title: '项目设置'
        }
      },
      {
        path: 'carer',
        component: CarerComponent,
        data: {
          title: '护工管理'
        }
      },
      {
        path: 'task',
        component: TaskComponent,
        data: {
          title: '护理任务'
        }
      },
      {
        path: 'record',
        component: RecordComponent,
        data: {
          title: '护理记录'
        }
      },
      {
        path: 'change',
        component: ChangeComponent,
        data: {
          title: '护理级别变更'
        }
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'nursing/level',
    // pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NursingRoutingModule { }
