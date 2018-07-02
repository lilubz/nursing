import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { HttpService } from '../core/http.service';
import { API } from '../common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { LoadingService } from '../core/loading.service';
import { LoginService } from './login.service';
import { UserStateService } from '../core/userState.service';

@Component({
  selector: 'wit-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit, OnDestroy {
  api = API;
  username = '';
  password = '';
  verificationCode = '';
  verificationCodeUrl = '';
  keepUsername = false;
  keepPassword = false;
  constructor(
    private messageService: MessageService,
    private loadingService: LoadingService,
    private loginService: LoginService,
    private userStateService: UserStateService,
  ) { }

  ngOnInit() {
    this.keepPassword = this.userStateService.keepPassword;
    this.keepUsername = this.userStateService.keepUsername;
    this.username = this.userStateService.username;
    this.password = this.userStateService.password;
  }
  show() {
    this.loadingService.show();
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }

  keepBtnChange(type: string) {

    if (type === 'password') {
      if (this.keepPassword) {
        this.keepUsername = true;
      }
    }

    if (type === 'username') {
      if (!this.keepUsername) {
        this.keepPassword = false;
      }
    }

  }

  refreshVerificationCode() {

  }

  ngOnDestroy() {
    this.userStateService.keepPassword = this.keepPassword;
    this.userStateService.keepUsername = this.keepUsername;
    this.userStateService.username = this.username;
    this.userStateService.password = this.password;
  }

}
