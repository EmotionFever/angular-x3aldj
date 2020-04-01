import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class LibraryRequestsService {

  baseUrl = "http://localhost:3000/catalog/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getNet(urlPath : string) {
    console.log(this.baseUrl + urlPath);
    return this.http.get(this.baseUrl + urlPath);
  }

  createNet(obj: Object, urlPath : string): Observable<Object> {
    return this.http.post(this.baseUrl + urlPath, obj, this.httpOptions);
  }

}