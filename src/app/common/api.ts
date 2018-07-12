
// const URL = 'http://192.168.1.127:8080/'; // 喜孩
const URL = '/intelligentOldAgeCare/'; // 喜孩
// const URL = 'http://192.168.1.127:8080/';
export const API = {
  // 项目地址
  'url': URL,
  'mapServerAddress': '122.228.28.0:16080',

  // 登录
  'verificationCode': URL + 'sysSetting/user/verificationCode.do',
  'updatePassword': URL + 'sysSetting/user/updatePassword.do',
  'logout': URL + 'sysSetting/user/logout.do',
  'login': URL + 'sysSetting/user/login.do',

  // 系统设置
  'getLoginUserInfo': URL + 'sysSetting/user/getLoginUserInfo.do',
  'deleteUserByIdList': URL + 'sysSetting/user/deleteUserByIdList.do',
  'resetUserPasswordByUserIdList': URL + 'sysSetting/user/resetUserPasswordByUserIdList.do',
  'editUserInfo': URL + 'sysSetting/user/editUserInfo.do',
  'addUser': URL + 'sysSetting/user/addUser.do',
  'getRoleList': URL + 'sysSetting/sysPermission/getRoleList.do',
  'getRoles': URL + 'sysSetting/sysPermission/getRoles.do',
  'getPermissions': URL + 'sysSetting/sysPermission/getPermissions.do',
  'deleteRole': URL + 'sysSetting/sysPermission/deleteRole.do',
  'getRoleByRoleId': URL + 'sysSetting/sysPermission/getRoleByRoleId.do',
  'editRole': URL + 'sysSetting/sysPermission/editRole.do',
  'addRole': URL + 'sysSetting/sysPermission/addRole.do',
  'getUserList': URL + 'sysSetting/user/getUserList.do',
  'getOrganizationList': URL + 'sysSetting/sysPermission/getOrganizationList.do',

};
