import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { MzValidationModule } from 'ngx-materialize';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    MzValidationModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
