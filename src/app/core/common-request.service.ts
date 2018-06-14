import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { UserStateService } from './../core/userState.service';
import { HttpService } from './../core/http.service';
import { API } from '../common/api';

@Injectable()
export class CommonRequestService {

  constructor(
    private httpService: HttpService,
    private userStateService: UserStateService,
    private router: Router
  ) { }

}
