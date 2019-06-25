import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { DataTablesModule } from 'angular-datatables';

import { MzSelectModule, MzValidationModule, MzCheckboxModule, MzSwitchModule, MzModalModule } from 'ngx-materialize';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    DataTablesModule,
    MzSelectModule,
    MzValidationModule,
    MzCheckboxModule,
    MzSwitchModule,
    MzModalModule, 
  ]
})
export class UserModule { }
