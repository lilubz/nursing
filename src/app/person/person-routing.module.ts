import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'reception',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PersonComponent,
    children: [
      {
        path: 'reception',
        loadChildren: './reception/reception.module#ReceptionModule',
      },
      {
        path: 'older',
        loadChildren: './older/older.module#OlderModule',
      },
      {
        path: 'nursing',
        loadChildren: './nursing/nursing.module#NursingModule',
      },
      {
        path: 'health',
        loadChildren: './health/health.module#HealthModule',
      },
      {
        path: 'medication',
        loadChildren: './medication/medication.module#MedicationModule',
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'person/reception'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
