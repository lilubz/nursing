
import { Injectable } from '@angular/core';
import { API } from './../common/api';
import { HttpService } from './../core/http.service';

@Injectable()
export class SystemService {

  constructor(
    private httpService: HttpService,
  ) { }

  getPermissions(params: any) {
    return this.httpService
      .getRequest(API.getPermissions, params);
  }
}
