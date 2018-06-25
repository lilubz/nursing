import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import * as moment from 'moment';
import { API } from '../common/api';

/**
 * 工具类--提供常用方法
 * 2018-01-24 11:03:03
 * @author hzb
 * @export
 * @class Util
 */
@Injectable()
export class Util {
  private renderer: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   * 下载文件
   * 2018-03-07 14:40:20
   * @memberof Util
   */
  downloadFile = (path: string) => {
    const $form = this.renderer.createElement('form');
    this.renderer.setAttribute($form, 'menthod', 'get');
    this.renderer.setAttribute($form, 'action', path);
    this.renderer.appendChild(document.body, $form);
    $form.submit();
    this.renderer.removeChild(document.body, $form);
  }

  /**
   * 判断是否是ie
   * 2018-03-19 14:31:38
   * @author hzb
   * @returns {boolean}
   * @memberof Util
   */
  ieVersion(): number {
    const ua = window.navigator.userAgent;
    let version = 0;
    if (/MSIE([^;]+)/.test(ua)) { // 判断IE11以下（不含IE11）
      version = parseFloat(RegExp['$1']);
    } else if (/rv:([^\)]+)\) like Gecko/.test(ua)) { // 判断IE11
      version = parseFloat(RegExp['$1']);
    }
    return version;
  }

  /**
   * 获取路由地址
   * 2018-05-14 17:05:24
   * @author hzb
   * @returns {string}
   * @memberof Util
   */
  getRouterUrl(): string {
    return location.hash.split('#')[1].split(/[?;]/)[0];
  }

  /**
   * 时间格式化
   *
   * @param {any} [date=new Date()] 接受 Date 类型或者 Moment 类型
   * @param {string} [target='default']
   * @param {string} [format='YYYY-MM-DD HH:mm:ss']
   * @returns {string}
   * @memberof Util
   */
  formatTime(date: any, target: string = 'default', format: string = 'YYYY-MM-DD HH:mm:ss'): string {
    const momentDate = moment.isDate(date) ? moment(date) : date;
    switch (target) {
      case 'begin':
      case 'start':
        return moment(momentDate.format('YYYY-MM-DD'), 'YYYY-MM-DD').format(format);
      case 'end':
        return moment(momentDate).format('YYYY-MM-DD') + ' 23:59:59';
      default:
        return momentDate.format(format);
    }
  }
}
