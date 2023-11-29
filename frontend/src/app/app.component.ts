import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../service/backendService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private backendService: BackendService) {}

  ngOnInit() {}

  title = 'frontend';

  
  testBackendConnection() {
    this.backendService.testConnection().subscribe(
      (response) => {
        console.log("Connection successful", response);
      },
      (error) => {
        console.error("Connection failed", error);
      }
    );
  }
}