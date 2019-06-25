import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationRoutingModule } from './communication-routing.module';
import { CommunicationComponent } from './communication.component';
import { DataTablesModule } from 'angular-datatables';
import { MzValidationModule } from 'ngx-materialize';
import { MzModalModule } from 'ngx-materialize';
import { MzDatepickerModule } from 'ngx-materialize'


@NgModule({
  declarations: [ CommunicationComponent ],
  imports: [
    CommonModule,
    CommunicationRoutingModule,
    DataTablesModule,
    MzValidationModule,
    MzModalModule,
    MzDatepickerModule
  ]
})
export class CommunicationModule { }
