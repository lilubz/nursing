import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BedInfoComponent } from './bed-info/bed-info.component';
import { ArchiveRoutingModule } from './archive.routing';
import { ArchiveComponent } from './archive.component';
import { BedSetComponent } from './bed-set/bed-set.component';
import { HouseComponent } from './house/house.component';
import { CostComponent } from './cost/cost.component';
import { ContractComponent } from './contract/contract.component';
import { ExpriationComponent } from './expriation/expriation.component';

@NgModule({
  imports: [
    CommonModule,
    ArchiveRoutingModule
  ],
  declarations: [
    BedInfoComponent,
    ArchiveComponent,
    BedSetComponent,
    HouseComponent,
    CostComponent,
    ContractComponent,
    ExpriationComponent
  ]
})
export class ArchiveModule { }
