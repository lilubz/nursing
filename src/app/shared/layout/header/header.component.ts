import { Component, OnInit } from '@angular/core';
import { UserStateService } from '../../../core/userState.service';
import { ConfirmationService } from 'primeng/primeng';
import { LoginService } from '../../../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wit-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [LoginService]
})
export class HeaderComponent implements OnInit {

  user = null;
  constructor(
    private userStateService: UserStateService,
    private confirmationService: ConfirmationService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.userStateService.user;
  }

  logout() {
    this.confirmationService.confirm({
      message: `当前登录的用户是：${this.user ? this.user.username : '还未登录'}，你确定要注销吗？`,
      header: '已经登录 是否要注销',
      icon: 'fa fa-exclamation-triangle',
      accept: () => {
        this.loginService.logout()
          .subscribe(res => {
            if (res.status === 200) {
              this.userStateService.user = null;
              this.router.navigate(['login']);
          }
          });

      },
      reject: () => {
      }
    });
  }

}
