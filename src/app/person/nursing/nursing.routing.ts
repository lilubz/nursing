import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NursingComponent, } from './nursing.component';
import { LevelComponent } from './level/level.component';

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
