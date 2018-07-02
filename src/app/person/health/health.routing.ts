import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthComponent, } from './health.component';
import { MedicalComponent } from './medical/medical.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { RecordComponent } from './record/record.component';
import { DailyComponent } from './daily/daily.component';
import { InputComponent } from './input/input.component';

// TODO: import components
// import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '健康管理'
    },
    children: [
      {
        path: '',
        redirectTo: 'medical',
        pathMatch: 'full'
      },
      {
        path: 'medical',
        component: MedicalComponent,
        data: {
          title: '体检登记'
        }
      },
      {
        path: 'evaluation',
        component: EvaluationComponent,
        data: {
          title: '评估管理'
        }
      },
      {
        path: 'record',
        component: RecordComponent,
        data: {
          title: '就医记录'
        }
      },
      {
        path: 'daily',
        component: DailyComponent,
        data: {
          title: '日常检测'
        }
      },
      {
        path: 'input',
        component: InputComponent,
        data: {
          title: '健康档案录入'
        }
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'health/medical',
    // pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HealthRoutingModule { }
