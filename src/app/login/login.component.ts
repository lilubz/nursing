import { Component, OnInit } from '@angular/core';
import { API } from '../common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { LoadingService } from '../core/loading.service';
import { LoginService } from './login.service';
import { UserStateService } from '../core/userState.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wit-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  api = API;
  formMode = {
    username: '',
    password: '',
    verificationCode: '',
    keepUsername: false,
    keepPassword: false
  };
  verificationCodeUrl = this.api.verificationCode + `?width=116&height=58&t=${new Date().getTime()}`;
  constructor(
    private messageService: MessageService,
    private loadingService: LoadingService,
    private userStateService: UserStateService,
    private _service: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formMode.keepPassword = this.userStateService.keepPassword;
    this.formMode.keepUsername = this.userStateService.keepUsername;
    this.formMode.username = this.userStateService.username;
    this.formMode.password = this.userStateService.password;
  }

  keepBtnChange(type: string) {

    if (type === 'password') {
      if (this.formMode.keepPassword) {
        this.formMode.keepUsername = true;
      }
    }

    if (type === 'username') {
      if (!this.formMode.keepUsername) {
        this.formMode.keepPassword = false;
      }
    }

  }

  refreshVerificationCode() {
    this.verificationCodeUrl = this.api.verificationCode + `?width=116&height=60&t=${new Date().getTime()}`;
    this.formMode.verificationCode = '';
  }

  login() {
    this._service.login({
      username: this.formMode.username,
      password: this.formMode.password,
      verificationCode: this.formMode.verificationCode,
    }).subscribe(
      res => {
        if (res.status === 200 || res.status === 4) {
          this.messageService.add({ severity: 'success', summary: '响应消息', detail: res.msg });
          this.userStateService.keepPassword = this.formMode.keepPassword;
          this.userStateService.keepUsername = this.formMode.keepUsername;
          this.userStateService.username = this.formMode.keepUsername ? this.formMode.username : '';
          this.userStateService.password = this.formMode.keepPassword ? this.formMode.password : '';
          this.userStateService.user = res.data;
          this.router.navigate(['/person']);
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: res.msg });
        }
      }
    );
  }

}
