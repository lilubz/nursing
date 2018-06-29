export const routerTree = [
  {
    pageName: '人员管理',
    pageID: 1,
    routerLink: '/person',
    children: [
      {
        pageName: '接待管理',
        pageID: 1,
        routerLink: '/person/reception',
        children: []
      },
      {
        pageName: '老人管理',
        pageID: 1,
        routerLink: '/person/older',
        children: []
      },
      {
        pageName: '护理管理',
        pageID: 1,
        routerLink: '/person/nursing',
        children: []
      },
      {
        pageName: '健康管理',
        pageID: 1,
        routerLink: '/person/health',
        children: []
      },
      {
        pageName: '用药管理',
        pageID: 1,
        routerLink: '/person/medication',
        children: []
      },
    ]
  },
  {
    pageName: '档案管理',
    pageID: 1,
    routerLink: '/archive',
    children: [
      {
        pageName: '床位信息',
        pageID: 1,
        routerLink: '/archive/bed-info',
        children: []
      },
      {
        pageName: '床位设置',
        pageID: 1,
        routerLink: '/archive/bed-set',
        children: []
      },
      {
        pageName: '楼栋管理',
        pageID: 1,
        routerLink: '/archive/house',
        children: []
      },
      {
        pageName: '护理费用',
        pageID: 1,
        routerLink: '/archive/cost',
        children: []
      },
      {
        pageName: '入住合同',
        pageID: 1,
        routerLink: '/archive/contract',
        children: []
      },
      {
        pageName: '合同预警',
        pageID: 1,
        routerLink: '/archive/expiration',
        children: []
      },
    ]
  },
  {
    pageName: '库存管理',
    pageID: 1,
    routerLink: '/store',
    children: [
      {
        pageName: '仓库管理',
        pageID: 1,
        routerLink: '/store/warehouse',
        children: []
      },
      {
        pageName: '入库管理',
        pageID: 1,
        routerLink: '/store/put-in',
        children: []
      },
      {
        pageName: '出库管理',
        pageID: 1,
        routerLink: '/store/put-out',
        children: []
      },
      {
        pageName: '供应商管理',
        pageID: 1,
        routerLink: '/store/supplier',
        children: []
      },
      {
        pageName: '库存查询',
        pageID: 1,
        routerLink: '/store/query',
        children: []
      },
      {
        pageName: '库存盘点',
        pageID: 1,
        routerLink: '/store/review',
        children: []
      },
      {
        pageName: '物资调拨',
        pageID: 1,
        routerLink: '/store/transfers',
        children: []
      },
      {
        pageName: '物资设置',
        pageID: 1,
        routerLink: '/store/setting',
        children: []
      },
      {
        pageName: '库存预警',
        pageID: 1,
        routerLink: '/store/warning',
        children: []
      },
    ]
  },
  {
    pageName: '费用管理',
    pageID: 1,
    routerLink: '/money',
    children: [
      {
        pageName: '预存管理',
        pageID: 1,
        routerLink: '/money/prestore',
        children: []
      },
      {
        pageName: '入住缴费',
        pageID: 1,
        routerLink: '/money/payment',
        children: []
      },
      {
        pageName: '退住结算',
        pageID: 1,
        routerLink: '/money/settlement',
        children: []
      },
      {
        pageName: '欠费管理',
        pageID: 1,
        routerLink: '/money/arrearage',
        children: []
      },
      {
        pageName: '押金管理',
        pageID: 1,
        routerLink: '/money/deposit',
        children: []
      },
      {
        pageName: '费用流水',
        pageID: 1,
        routerLink: '/money/bill',
        children: []
      },
      {
        pageName: '初始费用设置',
        pageID: 1,
        routerLink: '/money/initial',
        children: []
      },
      {
        pageName: '费用类别设置',
        pageID: 1,
        routerLink: '/money/type',
        children: []
      }
    ]
  },
  {
    pageName: '系统设置',
    pageID: 1,
    routerLink: '/system',
    children: [
      {
        pageName: '账号管理',
        pageID: 1,
        routerLink: '/system/account',
        children: []
      },
      {
        pageName: '个人中心',
        pageID: 1,
        routerLink: '/system/personal',
        children: []
      },
      {
        pageName: '权限设置',
        pageID: 1,
        routerLink: '/system/permission',
        children: []
      },
      {
        pageName: '操作日志',
        pageID: 1,
        routerLink: '/system/log',
        children: []
      }
    ]
  },
  {
    pageName: '统计分析',
    pageID: 1,
    routerLink: '/statistic',
    children: null
  },
  {
    pageName: 'demo',
    pageID: 1,
    routerLink: '/demo',
    children: [
      {
        pageName: 'table',
        pageID: 1,
        routerLink: '/demo/table',
        children: []
      },
      {
        pageName: 'tree',
        pageID: 1,
        routerLink: '/demo/tree',
        children: []
      },
    ]
  },
];
