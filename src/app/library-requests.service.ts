import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LibraryRequestsService {

  baseUrl = "http://localhost:3000/catalog/";

  constructor(private http: HttpClient) { }

  getNet(urlPath : string) {
    return this.http.get(this.baseUrl + urlPath);
  }

}