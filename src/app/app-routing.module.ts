import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './Shared/auth-guard/authentication-guard';

const routes: Routes = [
  { path: '', loadChildren: './layout/layout.module#LayoutModule', pathMatch: 'prefix', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
 { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
