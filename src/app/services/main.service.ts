import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Project, getCookieExpiryDate, serverURL } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  public projects: Project[] = [];

  constructor(private http: HttpClient) {}

  getProjectsFromServer() {
    return this.http.get<any>(`${serverURL}projects`);
  }
}