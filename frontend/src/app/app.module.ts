import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    KeycloakAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private readonly keycloak: KeycloakService) {
    this.initKeycloak();
  }

  private initKeycloak(): void {
    this.keycloak.init({
      config: {
        url: environment.KC_URL,
        realm: environment.KC_REALM,
        clientId: environment.KC_CLIENT_ID
      },
      initOptions: {
        onLoad: 'login-required'
      }
    }).then(r => console.log("There is a problem with keycloak!"));
  }
}
