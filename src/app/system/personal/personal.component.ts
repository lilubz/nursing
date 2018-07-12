import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system.service';
import { MessageService } from 'primeng/components/common/messageservice';
import * as moment from 'moment';

@Component({
  selector: 'wit-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  form = {
    userId: '',
    role: '',
    nickname: '',
    realName: '',
    idCard: '',
    sign: '',
    state: '',
    phone: '',
    registrationDate: '',
  };
  pwdForm = {
    old: '',
    new: '',
    confirmNew: '',
  };

  visible = false;

  constructor(
    private _service: SystemService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getLoginUserInfo();
  }

  onOpenDialog() {
    this.visible = true;
    this.pwdForm.new = '';
    this.pwdForm.old = '';
    this.pwdForm.confirmNew = '';
  }

  resetPassword() {
    this._service.updatePassword({
      oldPassword: this.pwdForm.old,
      newPassword: this.pwdForm.new,
    }).subscribe(res => {
      if (res.status === 200) {
        this.visible = false;
        this.messageService.add({ severity: 'success', summary: '', detail: res.msg });
      } else {
        this.messageService.add({ severity: 'error', summary: '', detail: res.msg });
      }
    });
  }

  getLoginUserInfo() {
    this._service.getLoginUserInfo().subscribe(res => {
      if (res.status === 200) {
        this.form.userId = res.data.userId;
        this.form.role = res.data.userId;
        this.form.phone = res.data.phone;
        this.form.realName = res.data.realname;
        this.form.registrationDate = moment(new Date(res.data.createTime)).format('YYYY-MM-DD HH:mm:ss');
      }

    });
  }

}
