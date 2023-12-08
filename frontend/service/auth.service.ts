import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular/lib/core/services/keycloak.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly keycloak: KeycloakService) {}
}
