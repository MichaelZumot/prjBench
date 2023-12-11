import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/authService';
import { HttpClientModule } from '@angular/common/http';
import { KeycloakAngularModule } from 'keycloak-angular';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private readonly authService: AuthService) {}
  ngOnInit(): void {
    this.checkToken();
  }

  checkToken(): void {
    this.authService.checkUserTokenAuth().subscribe(
      (data) => {
        console.log('Token sent successfully:', data);
      },
      (error) => {
        console.error('Error sending token:', error);
      }
    );
  }
}
