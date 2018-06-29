import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicationComponent, } from './medication.component';
import { RegisterComponent } from './register/register.component';

// TODO: import components
// import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '用药管理'
    },
    children: [
      {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full'
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: '用药登记'
        }
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'medication/register',
    // pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MedicationRoutingModule { }
