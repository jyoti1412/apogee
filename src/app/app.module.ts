import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './Shared/auth-guard/authentication-guard';
// import { SignupComponent } from './signup/signup.component';
// import { LoginComponent } from './login/login.component';

// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';

// import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    // SignupComponent,
    // LoginComponent,
    // LoginComponent,
    // SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [ AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
