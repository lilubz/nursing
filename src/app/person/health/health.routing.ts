import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthComponent, } from './health.component';
import { MedicalComponent } from './medical/medical.component';

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
