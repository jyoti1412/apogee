import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'default', pathMatch: 'prefix' },
      { path: 'default', loadChildren: './dashboard/dashboard.module#DashboardModule', pathMatch: 'full'},
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      { path: 'organization', loadChildren: './organization/organization.module#OrganizationModule'},
      { path: 'roles', loadChildren: './roles/roles.module#RolesModule'},
      { path: 'user', loadChildren: './user/user.module#UserModule'},
      { path: 'location', loadChildren: './location/location.module#LocationModule'},
      { path: 'alert', loadChildren: './alert/alert.module#AlertModule'},
      { path: 'communication', loadChildren: './communication/communication.module#CommunicationModule'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
