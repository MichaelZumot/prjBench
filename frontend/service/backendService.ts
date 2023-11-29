import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";

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
            // Handle the response as a success
            return throwError(error.error); // or any other logic based on your response
          } else {
            // Handle the error as usual
            return throwError(error);
          }
        })
      );
  }
}