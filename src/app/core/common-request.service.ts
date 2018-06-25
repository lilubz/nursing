import { Injectable, Inject } from '@angular/core';
import { HttpService } from './../core/http.service';
import { API } from '../common/api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonRequestService {

  constructor(
    private httpService: HttpService,
  ) { }

  signIn(params: any, loadingSelector?): Observable<any> {
    return this.httpService.formPostRequest('' + API.signIn, params, loadingSelector);
  }
}
