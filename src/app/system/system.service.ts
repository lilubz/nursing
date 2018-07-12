
import { Injectable } from '@angular/core';
import { API } from './../common/api';
import { HttpService } from './../core/http.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SystemService {

  constructor(
    private httpService: HttpService,
  ) { }

  getLoginUserInfo(params?: any, selector?): Observable<any> {
    return this.httpService.getRequest(API.getLoginUserInfo, params, selector );
  }

  deleteUserByIdList(params?: any, selector?): Observable<any> {
    return this.httpService.getRequest(API.deleteUserByIdList, params, selector);
  }

  resetUserPasswordByUserIdList(params?: any, selector?): Observable<any> {
    return this.httpService.getRequest(API.resetUserPasswordByUserIdList, params, selector);
  }

  editUserInfo(params?: any, selector?): Observable<any> {
    return this.httpService.formPostRequest(API.editUserInfo, params, selector);
  }

  addUser(params?: any, selector?): Observable<any> {
    return this.httpService.formPostRequest(API.addUser, params, selector);
  }

  getRoleList(params?: any, selector?): Observable<any> {
    return this.httpService.getRequest(API.getRoleList, params, selector);
  }

  getRoles(params?: any, selector?): Observable<any> {
    return this.httpService.getRequest(API.getRoles, params, selector);
  }

  getPermissions(params?: any, selector?): Observable<any> {
    return this.httpService.getRequest(API.getPermissions, params, selector);
  }

  deleteRole(params?: any, selector?): Observable<any> {
    return this.httpService.getRequest(API.deleteRole, params, selector);
  }

  getRoleByRoleId(params?: any, selector?): Observable<any> {
    return this.httpService.getRequest(API.getRoleByRoleId, params, selector);
  }

  editRole(params?: any, selector?): Observable<any> {
    return this.httpService.formPostRequest(API.editRole, params, selector);
  }

  addRole(params?: any, selector?): Observable<any> {
    return this.httpService.formPostRequest(API.addRole, params, selector);
  }

  getUserList(params?: any, selector = '.main'): Observable<any> {
    return this.httpService.getRequest(API.getUserList, params, selector);
  }

  updatePassword(params?: any, selector?): Observable<any> {
    return this.httpService.formPostRequest(API.updatePassword, params, selector);
  }

  getOrganizationList(params?: any, selector?): Observable<any> {
    return this.httpService.getRequest(API.getOrganizationList, params, selector);
  }

}
