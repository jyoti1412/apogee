import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertRoutingModule } from './alert-routing.module';
import { AlertComponent } from './alert.component';
import { DataTablesModule } from 'angular-datatables';
import { MzValidationModule } from 'ngx-materialize';
import { MzModalModule } from 'ngx-materialize';
import { MzDatepickerModule } from 'ngx-materialize';


@NgModule({
  declarations: [ AlertComponent ],
  imports: [
    CommonModule,
    AlertRoutingModule,
    DataTablesModule,
    MzValidationModule,
    MzModalModule,
    MzDatepickerModule
  
  ]
})
export class AlertModule { }
