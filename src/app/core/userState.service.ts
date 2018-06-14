import { Injectable } from '@angular/core';
import { Headers, Http, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';


/**
 * 用户信息服务
 * 2018-01-24 11:26:53
 * @author hzb
 * @export
 * @class UserStateService
 */
@Injectable()
export class UserStateService {
  private user;

  /**
   * 设置用户信息
   * 2018-01-24 11:28:34
   * @author hzb
   * @param {User} user
   * @memberof UserStateService
   */
  setUser(user) {
    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user));
      this.user = user;
    } else {
      this.user = null;
    }
  }

  /**
   * 获取用户信息
   * 2018-01-24 11:28:51
   * @author hzb
   * @returns {(User | null)}
   * @memberof UserStateService
   */
  getUser() {
    if (!this.user) {
      const user = sessionStorage.getItem('user');
      if (user !== 'undefined' && user !== 'null' && user !== '') {
        this.user = JSON.parse(user);
      } else {
        this.user = null;
      }
    }
    return this.user || null;
  }

}
