import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { LocationRoutingModule } from './location-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { MzValidationModule } from 'ngx-materialize';
import { MzModalModule } from 'ngx-materialize';
import { MzSelectModule,MzCheckboxModule} from 'ngx-materialize';

@NgModule({
  declarations: [ LocationComponent ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    DataTablesModule,
    MzValidationModule,
    MzModalModule,
    MzSelectModule,
    MzCheckboxModule
  ]
})
export class LocationModule { }
