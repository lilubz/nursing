import { Injectable } from '@angular/core';
import { UserStateService } from '../core/userState.service';


@Injectable()
export class LoginService {

  constructor(
    private userStateService: UserStateService
  ) { }

  getPassword() {
  }

}
