import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization.component';
import { OrganizationRoutingModule } from './organization-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { MzValidationModule } from 'ngx-materialize';
import { MzModalModule } from 'ngx-materialize';
import { MzSelectModule, MzCheckboxModule} from 'ngx-materialize';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';



@NgModule({
  declarations: [OrganizationComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    DataTablesModule,
    MzValidationModule,
    MzModalModule,
    MzSelectModule,
    MzCheckboxModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })

  ]
})
export class OrganizationModule  { }
