import { Injectable } from '@angular/core';
import { UserStateService } from '../core/userState.service';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../core/http.service';
import { API } from '../common/api';


@Injectable()
export class LoginService {

  constructor(
    private userStateService: UserStateService,
    private httpService: HttpService
  ) { }

  login(params?: any): Observable<any> {
    return this.httpService.formPostRequest(API.login, params);
  }

  logout(params?: any): Observable<any> {
    return this.httpService.getRequest(API.logout, params);
  }

  getVerificationCode(params?: any): Observable<any> {
    return this.httpService.getRequest(API.verificationCode, params);
  }

}
