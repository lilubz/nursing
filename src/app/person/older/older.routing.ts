import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OlderComponent, } from './older.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '老人管理'
    },
    children: [
      {
        path: '',
        redirectTo: 'information',
        pathMatch: 'full'
      },
      {
        path: 'information',
        component: InformationComponent,
        data: {
          title: '咨询登记'
        }
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'older/consult',
    // pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OlderRoutingModule { }
