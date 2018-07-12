import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'wit-permission-detail',
  templateUrl: './permission-detail.component.html',
  styleUrls: ['./permission-detail.component.scss']
})
export class PermissionDetailComponent implements OnInit {
  selectionInit = false;
  tree: any;
  treeList = [];
  id;
  type = 'insert';
  selectedTree = [];
  form = {
    roleName: '',
    organizationId: '1',
    remark: ''
  };
  dropdown = {
    default: [
      {
        label: '请选择',
        value: ''
      }
    ],
    organization: [
      {
        label: '养老院',
        value: '1'
      },
      {
        label: '政府',
        value: '2'
      }
    ]
  };
  constructor(
    private _service: SystemService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getDropdownOrganization();
    this.activatedRoute.queryParamMap.subscribe(data => {
      this.type = data.get('type');
      this.id = data.get('id');
      this.form.roleName = data.get('name');
      this.form.remark = data.get('remark');
      this.getPermissionsTree();
    });
  }

  formatPermissionType(PermissionType) {
    switch (PermissionType) {
      case 'select':
        return '查询';
      case 'insert':
        return '新增';
      case 'update':
        return '编辑';
      case 'delete':
        return '删除';
      case 'check':
        return '审核';
      default:
        break;
    }
  }

  getPermissionsTree() {
    const getTree = (callback?) => {
      this._service.getPermissions({}).subscribe(res => {
        const temp = [];
        if (res.data) {
          res.data.forEach(obj => {
            temp.push(this.transformTreeNode(obj));
          });
        }
        this.tree = temp;
        if (typeof callback === 'function') {
          callback();
        } else {
          this.selectionInit = true;
        }
      });
    };
    if (this.id) { // 有id 是【查询】或者【修改】
      this._service.getRoleByRoleId({ roleId: this.id }).subscribe(res => {
        const loadingState = () => {
          res.data.push({ permissionId: 26 });
          const arr = [];
          res.data.forEach(item => {
            arr.push(this.treeList.find(obj => {
              return obj.permissionId === item.permissionId;
            }));
          });
          this.selectedTree = arr.filter(item => (item !== undefined));
          this.selectionInit = false;
          setTimeout(() => {
            this.selectionInit = true;
          }, 0);
        };
        getTree(loadingState);
      });
    } else { // 没有id是【新增】
      getTree();
    }
  }

  transformTreeNode(data, parent?) {

    if (data) {
      if (data.sysPermissions && data.childResourceVOs === null) { // 这是最后一个层级了（有权限列表 && 无子节点）
        data.childResourceVOs = [];
        const tempChildren = [];
        data.sysPermissions.forEach(item => {
          const obj: any = {};
          obj.resourceName = this.formatPermissionType(item.operationName);
          obj.resourceId = item.resourceId;
          obj.permissionId = item.permissionId;
          obj.operationTypeId = item.operationTypeId;
          obj.lastNode = true;
          tempChildren.push(obj);
        });
        data.childResourceVOs = tempChildren;
        delete data.sysPermissions;
      }
      const temp = {
        label: data.resourceName,
        pageId: data.resourceId,
        permissionId: data.permissionId,
        // permissionIds: data.lastNode ? [].concat(data.childResourceVOs).map(item => (item.permissionId)) : [],  // 权限数组
        // permissions: data.lastNode ? [].concat(data.childResourceVOs).map(item => (item.operationTypeId)) : [],
        lastNode: data.lastNode ? true : false,
        expandedIcon: 'fa-folder-open', // 展开时的图标
        collapsedIcon: 'fa-folder', // 关闭时的图标
        selectable: this.type !== 'select', // 当类型为查看时，禁用点击。
        expanded: true, // 是否展开
        children: data.childResourceVOs,
        parent: parent
      };
      if (temp.lastNode) {
        this.treeList.push(temp);
      }
      if (data.childResourceVOs) {
        const arr = [];
        for (const item of data.childResourceVOs) {
          arr.push(this.transformTreeNode(item, temp));
        }
        temp.children = arr;
      }
      return temp;
    }
    return null;
  }

  insertOrUpdate() {
    const permissionId = [];
    this.selectedTree.forEach(item => {
      if (item.lastNode && item.permissionId) {
        permissionId.push(item.permissionId);
      }
    });
    switch (this.type) {
      case 'insert': // 新增角色
        this._service.addRole({
          roleName: this.form.roleName,
          organizationId: this.form.organizationId,
          remark: this.form.remark,
          permissionId,
        }, '.main').subscribe(res => {
          if (res.status === 200) {
            this.messageService.add({ severity: 'success', summary: '', detail: res.msg });
          } else {
            this.messageService.add({ severity: 'error', summary: '', detail: res.msg });
          }
        });
        break;
      case 'update': // 编辑角色
        this._service.editRole({
          roleId: this.id,
          roleName: this.form.roleName,
          organizationId: this.form.organizationId,
          remark: this.form.remark,
          permissionId,
        }, '.main').subscribe(res => {
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

  getDropdownOrganization() {
    this._service.getOrganizationList({}).subscribe(res => {
      if (res.status === 200) {
        this.dropdown.organization = this.dropdown.default.concat(res.data.map(item => ({
          label: item.organizationName,
          value: item.organizationId,
        })));
      }
    });
  }

}
