import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../core/loading.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { CommonRequestService } from '../../core/common-request.service';
import { SystemService } from '../system.service';
import { Table } from '../../common/table';

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
    searchType1: [
      {
        label: '姓名',
        value: '1'
      },
      {
        label: '全部',
        value: ''
      },
      {
        label: '账号状态',
        value: '2'
      },
      {
        label: '角色名称',
        value: '3'
      },
      {
        label: '身份证号',
        value: '4'
      }
    ],
    searchType2: [
      {
        label: '姓名',
        value: '1'
      },
      {
        label: '账号状态',
        value: '2'
      },
      {
        label: '角色名称',
        value: '3'
      },
      {
        label: '身份证号',
        value: '4'
      }
    ]
  };

  tab = new Table();
  form = {
    searchType1: '1',
    searchType2: '2',
    searchValue1: '',
    searchValue2: '',
  };

  dialog = {
    visible: false,
    rowData: {}
  };

  dialogForm = {
    username: '',
    memberName: '',
    phone: '',
    role: '',
    idCard: '',
    password: '',
    state: '',
    comment: '',
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
    onPageChange: function () { },
    onSearch: () => {},
  };

  constructor(
    private loadingService: LoadingService,
    private messageService: MessageService,
    private _service: SystemService
  ) { }

  ngOnInit() {
    this.getRoleType();
    Object.assign(this.table.pageParams, this.form);
    console.log(this.tab.rows);
  }

  openDialog(rowData) {
    this.dialog.rowData = rowData;
    this.dialogForm = rowData;
    console.log(rowData);
    this.dialog.visible = true;
  }

  confirmEdit() {
    console.log('confirmEdit');
    this._service.editUserInfo({
      userId: this.dialog.rowData['userId'] || '',
      username: this.dialogForm.username || '',
      realname: this.dialogForm.memberName || '',
      phone: this.dialogForm.phone || '',
      password: this.dialogForm.password || '',
      identitycard: this.dialogForm.idCard || '',
      status: this.dialogForm.state || '',
      remark: this.dialogForm.comment || '',
      roleId: this.dialogForm.role || '',
    })
      .subscribe(
      res => {
        this.messageService.add({ severity: 'success', summary: '', detail: res.msg });
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
    }).subscribe(
      res => {
        this.table.list = res.data.list;
        console.log(this);
      },
      error => console.log(error)
    );
  }

  getRoleType() {
    this._service.getRoles()
      .subscribe(
      res => {
        this.dropdown.rolesType = res.data.map(item => ({
          label: item.remark,
          value: item.roleId
        }));
      }
    )
  }

}
