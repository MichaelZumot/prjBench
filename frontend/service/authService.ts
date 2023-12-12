import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenUrl = 'http://localhost:8080/api/token';
  private keycloakInitialized!: Promise<void>;

  constructor(
    private readonly keycloak: KeycloakService,
    private readonly http: HttpClient,
  ) {
    this.initKeycloak();
  }

    private createAuthorizationHeader(): HttpHeaders {
    const token = this.keycloak.getKeycloakInstance().token;
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  checkUserTokenAuth(): Observable<any> {
    const headers = this.createAuthorizationHeader();
    console.log('Token before sending request:', headers.get('Authorization'));
  
    return this.http.get(this.tokenUrl, { headers, responseType: 'text' }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.error('Unauthorized error:', error);
        }
        return throwError(error);
      })
    );
  }

  public async getUserToken(): Promise<void> {
    await this.keycloakInitialized;
    try {
      const token = await this.keycloak.getToken();
      console.log('Keycloak Token:', token);
    } catch (error) {
      console.error('Error getting Keycloak Token:', error);
    }
  }

  private initKeycloak(): void {
    this.keycloakInitialized = new Promise(async (resolve) => {
      await this.keycloak.init({
        config: {
          url: 'http://localhost:8180/',
          realm: 'Bench',
          clientId: 'bench-frontend-api',
        },
        initOptions: {
          onLoad: 'login-required',
        },
      });
      resolve();
    });
  }
}
