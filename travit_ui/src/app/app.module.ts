import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthButtonComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Authentication Module from auth0
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Import the Auth module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-z2xoxnbl.auth0.com',
      clientId: 'Lsz7xQ38EvAEfLY4TLjToetINy2Zly1p'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
