import { Component, OnInit } from '@angular/core';
import { Table } from '../../../common/table';
import { SystemService } from '../../system.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'wit-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.scss']
})
export class PermissionListComponent implements OnInit {
  table = new Table();
  form = {
    roleName: '',
    roleId: ''
  };

  constructor(
    private _service: SystemService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    Object.assign(this.table.params, this.form);
  }

  deleteRole() {
    console.log(this.table);
    const roleArr = [];
    this.table.selected.forEach(item => {
      roleArr.push(item.roleId);
    });
    if (roleArr.length <= 0) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '还没有选择要操作的角色' });
    } else {  // 在表格中勾选了数据
      this.confirmationService.confirm({
        message: '是否删除所选角色',
        header: '删除角色',
        icon: 'fa fa-exclamation-triangle',
        accept: () => { // 点击了确认操作
          this._service.deleteRole({ roleId: roleArr }).subscribe(res => {
            if (res.status === 200) {
              this.messageService.add({ severity: 'success', summary: '', detail: res.msg });
            } else {
              this.messageService.add({ severity: 'error', summary: '', detail: res.msg });
            }
          });
        }
      });
    }
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
      Object.assign(this.table.params, this.form);
      this.getTableList();
    }
  }
  checkForm(): boolean {
    return true;
  }
  getTableList() {
    this._service.getRoleList({
      roleId: this.table.params.roleId,
      roleName: this.table.params.roleName,
      pageSize: 10,
      pageNumber: 1
    }, '.main').subscribe(res => {
      this.table.list = res.data.list;
    });
  }
}
