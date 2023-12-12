import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../service/backendService';
import { AuthService } from '../../service/authService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(
    private backendService: BackendService,
    private readonly authService: AuthService  ) {
      this.initKeycloak();
    }
    private async initKeycloak(): Promise<void> {
      await this.authService.getUserToken();
    }

  ngOnInit() {}

  title = 'frontend';

  testBackendConnection() {
    this.backendService.testConnection().subscribe(
      (response) => {
        console.log('Connection successful', response);
      },
      (error) => {
        console.error('Connection failed', error);
      }
    );
  }
}
