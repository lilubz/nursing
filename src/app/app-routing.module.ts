import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthGuard } from './core/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'person',
        loadChildren: './person/person.module#PersonModule',
      },
      {
        path: 'archive',
        loadChildren: './archive/archive.module#ArchiveModule',
      },
      {
        path: 'store',
        loadChildren: './store/store.module#StoreModule',
      },
      {
        path: 'money',
        loadChildren: './money/money.module#MoneyModule',
      },
      {
        path: 'system',
        loadChildren: './system/system.module#SystemModule',
      },
      {
        path: 'demo',
        loadChildren: './demo/demo.module#DemoModule',
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
