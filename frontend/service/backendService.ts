import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BackendService {
  private backendUrl = "http://localhost:8080/api";
  
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:8080/api/test';

  testConnection(): Observable<any> {
    return this.http.get(this.apiUrl)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 200) {
            return throwError(error.error); 
          } else {   
            return throwError(error);
          }
        })
      );
  }
}