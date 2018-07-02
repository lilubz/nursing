import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicationComponent, } from './medication.component';
import { RegisterComponent } from './register/register.component';
import { SaveComponent } from './save/save.component';
import { SettingComponent } from './setting/setting.component';
import { SurplusComponent } from './surplus/surplus.component';
import { DictionaryComponent } from './dictionary/dictionary.component';

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
      {
        path: 'save',
        component: SaveComponent,
        data: {
          title: '药品缴存'
        }
      },
      {
        path: 'setting',
        component: SettingComponent,
        data: {
          title: '用药设置'
        }
      },
      {
        path: 'surplus',
        component: SurplusComponent,
        data: {
          title: '剩余药品'
        }
      },
      {
        path: 'dictionary',
        component: DictionaryComponent,
        data: {
          title: '药品字典'
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
