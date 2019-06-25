import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './component/header/header.component';
import { MzNavbarModule } from 'ngx-materialize';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MzSidenavModule } from 'ngx-materialize';
// import { LoginComponent } from './login/login.component';
// import { CommunicationComponent } from './communication/communication.component';
// import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MzNavbarModule,
    MzSidenavModule
  ]
})
export class LayoutModule { }
