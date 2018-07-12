import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { API } from '../common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { LoadingService } from '../core/loading.service';
import { LoginService } from './login.service';
import { UserStateService } from '../core/userState.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

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
  @ViewChild('verificationCode') verificationCode: ElementRef;
  constructor(
    private messageService: MessageService,
    private loadingService: LoadingService,
    private userStateService: UserStateService,
    private _service: LoginService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private renderer2: Renderer2
  ) { }

  ngOnInit() {
    this.formMode.keepPassword = this.userStateService.keepPassword;
    this.formMode.keepUsername = this.userStateService.keepUsername;
    this.formMode.username = this.userStateService.username;
    this.formMode.password = this.userStateService.password;
    this.refreshVerificationCode();
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
    this._service.getVerificationCode({ width: 116, height: 58 }).subscribe(res => {
      this.renderer2.setAttribute(this.verificationCode.nativeElement, 'src', res.data);
    });
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
