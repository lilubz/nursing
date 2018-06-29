import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent, } from './archive.component';
import { BedInfoComponent } from './bed-info/bed-info.component';
import { BedSetComponent } from './bed-set/bed-set.component';
import { HouseComponent } from './house/house.component';
import { CostComponent } from './cost/cost.component';
import { ContractComponent } from './contract/contract.component';
import { ExpriationComponent } from './expriation/expriation.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: '档案管理'
    },
    component: ArchiveComponent,
    children: [
      {
        path: '',
        redirectTo: 'bed-info',
        pathMatch: 'full'
      },
      {
        path: 'bed-info',
        component: BedInfoComponent,
        data: {
          title: '床位信息'
        }
      },
      {
        path: 'bed-set',
        component: BedSetComponent,
        data: {
          title: '床位设置'
        }
      },
      {
        path: 'house',
        component: HouseComponent,
        data: {
          title: '楼栋管理'
        }
      },
      {
        path: 'cost',
        component: CostComponent,
        data: {
          title: '护理费用'
        }
      },
      {
        path: 'contract',
        component: ContractComponent,
        data: {
          title: '入住合同'
        }
      },
      {
        path: 'expiration',
        component: ExpriationComponent,
        data: {
          title: '合同预警'
        }
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'archive/bed-info',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveRoutingModule { }
