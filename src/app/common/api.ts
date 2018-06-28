
const URL = '/';
export const API = {
  // 项目地址
  'url': URL,
  'mapServerAddress': '122.228.28.0:16080',

  // 登录
  'signIn': URL + 'sysUserPermissions/user/login.do',
  'signUp': URL + 'sysUserPermissions/login.do',
  'logout': URL + 'sysUserPermissions/user/logout.do',

  // 登录
  'getPermissions': URL + 'sysSetting/sysPermission/getPermissions.do',
};
