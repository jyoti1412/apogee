import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MzValidationModule } from 'ngx-materialize';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MzValidationModule
  ]
})
export class LoginModule { }
