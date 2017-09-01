import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { APPCONFIG } from 'app/config';
import { PlatformLocation } from "@angular/common";

@Injectable()
export class AppService {

  private apiUrl: string = APPCONFIG.apiUrl;
  constructor(private http: Http) {
  }

  login(login) {

    return this.http.post(this.apiUrl + 'login', login).map(this.extractData);
  }
  Message(Message) {
    return this.http.post(this.apiUrl + 'write', Message).map(this.extractData);
  }
  getStatesWithPagination(sort, offset, limit) {
    return this.http.get(this.apiUrl + 'states?sort=' + sort + '&offset=' + offset + '&limit=' + limit).map(this.extractData);
  }
  getAllMessage() {
    return this.http.get(this.apiUrl + 'read').map(this.extractData);
  }

  private extractData(res: Response) {
    return (typeof res == 'object') ? res.json() : res;
  }
}
