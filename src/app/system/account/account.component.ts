import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../core/loading.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { CommonRequestService } from '../../core/common-request.service';
import { SystemService } from '../system.service';
import { Table } from '../../common/table';
import { ConfirmationService } from 'primeng/primeng';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'wit-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  dropdown = {
    default: [
      {
        label: '全部',
        value: ''
      }
    ],
    rolesType: [],
    searchType: [
      {
        label: '姓名',
        value: 'username'
      },
      {
        label: '账号状态',
        value: 'status'
      },
      {
        label: '角色名称',
        value: 'roleName'
      },
      {
        label: '身份证号',
        value: 'identitycard'
      }
    ]
  };
  splitButtonConfig = [
    { label: '批量重置密码', command: this.deleteOrResetPassword.bind(this, 'resetPassword') },
    { label: '批量删除', command: this.deleteOrResetPassword.bind(this, 'delete') },
    { label: '导出' }
  ];
  form = {
    searchType1: '1',
    searchType2: '2',
    searchValue1: '',
    searchValue2: '',
  };
  dialog = {
    visible: false,
    rowData: {},
    type: ''
  };
  dialogForm = {
    username: '',
    memberName: '',
    phone: '',
    role: '',
    idCard: '',
    password: '',
    state: false,
    comment: '',
    userId: '',
  };
  table: any = {
    first: 0,
    pageSize: 1,
    pageNumber: 10,
    loading: false,
    list: [],
    selected: [],
    total: 100,
    rows: 10,
    PageOptions: [10, 20, 30],
    pageParams: {},
  };

  constructor(
    private loadingService: LoadingService,
    private messageService: MessageService,
    private _service: SystemService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.getDropdownRoleType();
    Object.assign(this.table.pageParams, this.form);
  }

  openDialog(type, rowData?) {
    this.dialog.visible = true;
    switch (type) {
      case '添加':
        this.dialogForm.username = '';
        this.dialogForm.memberName = '';
        this.dialogForm.phone = '';
        this.dialogForm.role = '';
        this.dialogForm.idCard = '';
        this.dialogForm.password = '';
        this.dialogForm.state = false;
        this.dialogForm.comment = '';
        break;

      case '编辑':
        this.dialog.rowData = rowData;
        this.dialogForm.userId = rowData.userId;
        this.dialogForm.username = rowData.username;
        this.dialogForm.memberName = rowData.realname;
        this.dialogForm.phone = rowData.phone;
        this.dialogForm.role = rowData.roleValues;
        this.dialogForm.idCard = rowData.identitycard;
        this.dialogForm.password = '';
        this.dialogForm.state = rowData.status === 0 ? false : true;
        this.dialogForm.comment = rowData.remark;
        break;
      default:
        break;
    }
    this.dialog.visible = true;
    this.dialog.type = type;
  }

  addOrEdit() {
    console.log(this);
    const params = {
      username: this.dialogForm.username || '',
      realname: this.dialogForm.memberName || '',
      phone: this.dialogForm.phone || '',
      password: this.dialogForm.password || '',
      identitycard: this.dialogForm.idCard || '',
      status: this.dialogForm.state ? 1 : 0,
      remark: this.dialogForm.comment || '',
      roleId: this.dialogForm.role || '',
    };
    switch (this.dialog.type) {
      case '添加':
        this._service.addUser(params).subscribe(res => {
          if (res.status === 200) {
            this.messageService.add({ severity: 'success', summary: '', detail: res.msg });
          } else {
            this.messageService.add({ severity: 'error', summary: '', detail: res.msg });
          }
        });
        break;

      case '编辑':
        params['userId'] = this.dialogForm.userId;
        this._service.editUserInfo(params).subscribe(res => {
          if (res.status === 200) {
            this.messageService.add({ severity: 'success', summary: '', detail: res.msg });
          } else {
            this.messageService.add({ severity: 'error', summary: '', detail: res.msg });
          }
        });
        break;
      default:
        break;
    }
  }

  deleteOrResetPassword(type) {
    const userIdArr = [];
    this.table.selected.forEach(item => {
      userIdArr.push(item.userId);
    });
    if (userIdArr.length <= 0) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '还没有选择要操作的用户' });
    } else {  // 在表格中勾选了数据
      this.confirmationService.confirm({
        message: type === 'delete' ? '是否删除所选用户' : '是否将所选用户的密码重置为“123456”',
        header: type === 'delete' ? '删除用户' : '重置密码',
        icon: 'fa fa-exclamation-triangle',
        accept: () => { // 点击了确认操作
          switch (type) {
            case 'delete':  // 删除操作
              this._service.deleteUserByIdList({ userId: userIdArr }).subscribe(res => {
                if (res.status === 200) {
                  this.messageService.add({ severity: 'success', summary: '', detail: res.msg });
                } else {
                  this.messageService.add({ severity: 'error', summary: '', detail: res.msg });
                }
              });
              break;

            case 'resetPassword':  // 重置密码操作
              this._service.resetUserPasswordByUserIdList({ userId: userIdArr }).subscribe(res => {
                if (res.status === 200) {
                  this.messageService.add({ severity: 'success', summary: '', detail: res.msg });
                } else {
                  this.messageService.add({ severity: 'error', summary: '', detail: res.msg });
                }
              });
              break;
            default:
              break;
          }
        }
      });
    }
  }

  getDropdownRoleType() {
    this._service.getRoles()
      .subscribe(
        res => {
          this.dropdown.rolesType = res.data.map(item => ({
            label: item.remark,
            value: item.roleId
          }));
        }
      );
  }


  onPageChange(event) {
    if (event) {
      this.table.pageSize = event.rows;
      this.table.pageNumber = event.first / event.rows + 1;
    }
    this.getTableList();
  }
  onSubmit() {
    if (this.checkForm()) {
      this.table.first = 0;
      this.table.pageNumber = 1;
      Object.assign(this.table.pageParams, this.form);
      this.getTableList();
    }
  }
  checkForm(): boolean {
    if (!this.form.searchType1) {
      this.messageService.clear();
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择搜索类型' });
      return false;
    }
    return true;
  }
  getTableList() {
    this._service.getUserList({
      searchType1: this.table.pageParams.searchType1,
      searchValue1: this.table.pageParams.searchValue1,
      searchType2: this.table.pageParams.searchType2,
      searchValue2: this.table.pageParams.searchValue2,
      pageSize: 10,
      pageNumber: 1
    }).subscribe(res => {
      this.table.list = res.data.list;
    });
  }
}
