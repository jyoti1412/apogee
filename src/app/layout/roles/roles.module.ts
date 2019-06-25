import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import { RolesRoutingModule } from './roles-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { MzSelectModule, MzValidationModule,MzCheckboxModule} from 'ngx-materialize';


@NgModule({
  declarations: [RolesComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    DataTablesModule,
    MzSelectModule,
    MzValidationModule,
    MzCheckboxModule
  ]
})
export class RolesModule { }
