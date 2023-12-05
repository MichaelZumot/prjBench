import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';

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
        url: 'http://localhost:8180/',
        realm: 'Bench',
        clientId: 'bench-frontend-api',
      },
      initOptions: {
        onLoad: 'login-required',
        // checkLoginIframe: false,
      },
      // enableBearerInterceptor: true,
      // bearerExcludedUrls: ['/assets', '/clients/public'],
    });
  }
}