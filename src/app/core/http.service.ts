import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

import { UserStateService } from './userState.service';
import { LoadingService } from './loading.service';
import { MessageService } from 'primeng/components/common/messageservice';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpService {
  private formHeaders = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charser=UTF-8' });

  constructor(
    private http: Http,
    private router: Router,
    private userStateService: UserStateService,
    private loadingService: LoadingService,
    private messageService: MessageService
  ) { }

  // 重封装get请求
  getRequest = (url, data, loadingSelector?) => {
    return this.http.get(url + '?' + this.transformRequest(data) + '&' + 't=' + new Date().getTime())
      .do(
        res => {
          this.setLoading(true, loadingSelector);
          // this.httpStatusFilter(res);
        },
        error => {
          this.setLoading(false, loadingSelector);
          this.handleError(error);
        },
    );
  }

  // 重封装post请求，参数序列化
  formPostRequest = (url, data, loadingSelector) => {
    this.setLoading(true, loadingSelector);
    return this.http
      .post(url, this.transformRequest(data), { headers: this.formHeaders })
      .do(
        res => {
          this.setLoading(true, loadingSelector);
          // this.httpStatusFilter(res);
        },
        error => {
          this.setLoading(false, loadingSelector);
          this.handleError(error);
        },
    );
  }

  // 重封装post请求，不修改content-type请求头
  formDataPostRequest = (url, data, loadingSelector?) => {
    return this.http
      .post(url, data)
      .do(
        res => {
          this.setLoading(true, loadingSelector);
          // this.httpStatusFilter(res);
        },
        error => {
          this.setLoading(false, loadingSelector);
          this.handleError(error);
        },
    );
  }

  transformRequest(obj) {
    const str = [];
    for (const p in obj) {
      if (p) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return str.join('&');
  }

  private handleError(error: any): void {
    this.messageService.add({ severity: 'error', summary: error.status, detail: error.statusText });
  }


  /**
   * 不确定是否要过滤
   * @private
   * @param {(Response | any)} res
   * @memberof HttpService
   */
  private httpStatusFilter(res: Response | any): void {
    switch (res.status) {
      case 100:
        break;
      case 200:
        // 没有登录
        if (res.json().status === 10) {
          this.userStateService.setUser(undefined);
          this.router.navigate(['/login']);
        }
        break;
      case 300:
        break;
      case 400:
        break;
      case 500:
        break;
    }
  }


  /**
   * 设置是否显示loading组件，loadingSelector如果为空什么都不做
   * @private
   * @param {boolean} showLoading 是否要显示加载页面
   * @param {string} loadingSelector 把加载组件放在哪个元素里面
   * @memberof HttpService
   */
  private setLoading(showLoading: boolean, loadingSelector: string): void {
    if (loadingSelector) {
      if (showLoading) {
        this.loadingService.show(loadingSelector);
      } else {
        this.loadingService.hide();
      }
    }
  }

}
