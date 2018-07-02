import { Injectable } from '@angular/core';
import { Base64 } from 'js-base64';

@Injectable()
export class UserStateService {
  private _user = null;
  private _keepUsername = false;
  private _keepPassword = false;
  private _username = '';
  private _password = '';


  // 设置和读取【当前登录用户】的状态
  set user(value) {
    this._user = value || null;
  }
  get user() {
    return this._user || null;
  }


  // 设置和读取【当前登录用户】的用户名
  set username(value) {
    if (this.keepUsername) {
      localStorage.setItem('username', value);
      this._username = value;
    } else {
      localStorage.setItem('username', '');
      this._username = '';
    }
  }
  get username() {
    this._username = localStorage.getItem('username') || '';
    return this._username;
  }


  // 设置和读取【当前登录用户】的密码 (包含加密和解密)
  set password(value) {
    if (this.keepPassword) {
      localStorage.setItem('password', Base64.encode(value));
      this._password = Base64.encode(value);
    } else {
      localStorage.setItem('password', Base64.encode(''));
      this._password = Base64.encode('');
    }
  }
  get password() {
    this._password = localStorage.getItem('password');
    return Base64.decode(this._password) || '';
  }


    // 设置和读取【记住用户名】按纽的状态
  set keepUsername(value) {
    if (typeof value === 'boolean') {
      localStorage.setItem('keepUsername', JSON.stringify(value));
      this._keepUsername = value;
    }
  }
  get keepUsername(): boolean {
    this.keepUsername = localStorage.getItem('keepUsername') === 'true' ? true : false;
    return this._keepUsername;
  }


  // 设置和读取【记住密码】按纽的状态
  set keepPassword(value) {
    if (typeof value === 'boolean') {
      localStorage.setItem('keepPassword', JSON.stringify(value));
      this._keepPassword = value;
    }
  }
  get keepPassword(): boolean {
    this.keepPassword = localStorage.getItem('keepPassword') === 'true' ? true : false;
    return this._keepPassword;
  }

}
