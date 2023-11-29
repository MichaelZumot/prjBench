import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BackendService {
  private backendUrl = "http://localhost:8080/api/";
  
  constructor(private http: HttpClient) {}

  testConnection(): Observable<any> {
    const url = this.backendUrl + "test";
    return this.http.get(url);
  }


}