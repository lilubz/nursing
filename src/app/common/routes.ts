export const ROUTES = [
  {
    pageName: '人员管理',
    pageId: 1,
    routerLink: '/person',
    children: [
      {
        pageName: '接待管理',
        pageId: 1,
        routerLink: '/person/reception',
        children: [
          {
            pageName: '咨询登记',
            pageId: 1,
            routerLink: '/person/reception/consult',
            children: null
          },
          {
            pageName: '来访登记',
            pageId: 1,
            routerLink: '/person/reception/visit',
            children: null
          },
          {
            pageName: '预约登记',
            pageId: 1,
            routerLink: '/person/reception/order',
            children: null
          },
          {
            pageName: '试住登记',
            pageId: 1,
            routerLink: '/person/reception/try-in',
            children: null
          },
          {
            pageName: '入住登记',
            pageId: 1,
            routerLink: '/person/reception/check-in',
            children: null
          },
          {
            pageName: '退住登记',
            pageId: 1,
            routerLink: '/person/reception/check-out',
            children: null
          },
          {
            pageName: '床位查询',
            pageId: 1,
            routerLink: '/person/reception/bed',
            children: null
          },
        ]
      },
      {
        pageName: '老人管理',
        pageId: 1,
        routerLink: '/person/older',
        children: [
          {
            pageName: '基本信息',
            pageId: 1,
            routerLink: '/person/older/information',
            children: null
          },
          {
            pageName: '评估管理',
            pageId: 1,
            routerLink: '/person/older/evaluation',
            children: null
          },
          {
            pageName: '入住管理',
            pageId: 1,
            routerLink: '/person/older/check-in',
            children: null
          },
          {
            pageName: '外出登记',
            pageId: 1,
            routerLink: '/person/older/go-out',
            children: null
          },
          {
            pageName: '探视来访',
            pageId: 1,
            routerLink: '/person/older/visit',
            children: null
          },
          {
            pageName: '老人事件',
            pageId: 1,
            routerLink: '/person/older/event',
            children: null
          },
          {
            pageName: '退住办理',
            pageId: 1,
            routerLink: '/person/older/check-out',
            children: null
          },
        ]
      },
      {
        pageName: '护理管理',
        pageId: 1,
        routerLink: '/person/nursing',
        children: [
          {
            pageName: '项目类型',
            pageId: 1,
            routerLink: '/person/nursing/type',
            children: null
          },
          {
            pageName: '项目设置',
            pageId: 1,
            routerLink: '/person/nursing/set',
            children: null
          },
          {
            pageName: '护理级别',
            pageId: 1,
            routerLink: '/person/nursing/level',
            children: null
          },
          {
            pageName: '护工管理',
            pageId: 1,
            routerLink: '/person/nursing/carer',
            children: null
          },
          {
            pageName: '护理任务',
            pageId: 1,
            routerLink: '/person/nursing/task',
            children: null
          },
          {
            pageName: '护理记录',
            pageId: 1,
            routerLink: '/person/nursing/record',
            children: null
          },
          {
            pageName: '护理级别变更',
            pageId: 1,
            routerLink: '/person/nursing/change',
            children: null
          },
        ]
      },
      {
        pageName: '健康管理',
        pageId: 1,
        routerLink: '/person/health',
        children: [
          {
            pageName: '体检登记',
            pageId: 1,
            routerLink: '/person/health/medical',
            children: null
          },
          {
            pageName: '评估管理',
            pageId: 1,
            routerLink: '/person/health/evaluation',
            children: null
          },
          {
            pageName: '就医记录',
            pageId: 1,
            routerLink: '/person/health/record',
            children: null
          },
          {
            pageName: '日常检测',
            pageId: 1,
            routerLink: '/person/health/daily',
            children: null
          },
          {
            pageName: '健康档案录入',
            pageId: 1,
            routerLink: '/person/health/input',
            children: null
          },
        ]
      },
      {
        pageName: '用药管理',
        pageId: 1,
        routerLink: '/person/medication',
        children: [
          {
            pageName: '用药登记',
            pageId: 1,
            routerLink: '/person/medication/register',
            children: null
          },
          {
            pageName: '药品缴存',
            pageId: 1,
            routerLink: '/person/medication/save',
            children: null
          },
          {
            pageName: '用药设置',
            pageId: 1,
            routerLink: '/person/medication/setting',
            children: null
          },
          {
            pageName: '剩余药品',
            pageId: 1,
            routerLink: '/person/medication/surplus',
            children: null
          },
          {
            pageName: '药品字典',
            pageId: 1,
            routerLink: '/person/medication/dictionary',
            children: null
          },
        ]
      },
    ]
  },
  {
    pageName: '档案管理',
    pageId: 1,
    routerLink: '/archive',
    children: [
      {
        pageName: '床位信息',
        pageId: 1,
        routerLink: '/archive/bed-info',
        children: null
      },
      {
        pageName: '床位设置',
        pageId: 1,
        routerLink: '/archive/bed-set',
        children: null
      },
      {
        pageName: '楼栋管理',
        pageId: 1,
        routerLink: '/archive/house',
        children: null
      },
      {
        pageName: '护理费用',
        pageId: 1,
        routerLink: '/archive/costs',
        children: null
      },
      {
        pageName: '入住合同',
        pageId: 1,
        routerLink: '/archive/contract',
        children: null
      },
      {
        pageName: '合同预警',
        pageId: 1,
        routerLink: '/archive/expiration',
        children: null
      },
    ]
  },
  {
    pageName: '库存管理',
    pageId: 1,
    routerLink: '/store',
    children: [
      {
        pageName: '仓库管理',
        pageId: 1,
        routerLink: '/store/warehouse',
        children: null
      },
      {
        pageName: '入库管理',
        pageId: 1,
        routerLink: '/store/put-in',
        children: null
      },
      {
        pageName: '出库管理',
        pageId: 1,
        routerLink: '/store/put-out',
        children: null
      },
      {
        pageName: '供应商管理',
        pageId: 1,
        routerLink: '/store/supplier',
        children: null
      },
      {
        pageName: '库存查询',
        pageId: 1,
        routerLink: '/store/query',
        children: null
      },
      {
        pageName: '库存盘点',
        pageId: 1,
        routerLink: '/store/review',
        children: null
      },
      {
        pageName: '物资调拨',
        pageId: 1,
        routerLink: '/store/transfers',
        children: null
      },
      {
        pageName: '物资设置',
        pageId: 1,
        routerLink: '/store/setting',
        children: null
      },
      {
        pageName: '库存预警',
        pageId: 1,
        routerLink: '/store/warning',
        children: null
      },
    ]
  },
  {
    pageName: '费用管理',
    pageId: 1,
    routerLink: '/money',
    children: [
      {
        pageName: '预存管理',
        pageId: 1,
        routerLink: '/money/prestore',
        children: null
      },
      {
        pageName: '入住缴费',
        pageId: 1,
        routerLink: '/money/payment',
        children: null
      },
      {
        pageName: '退住结算',
        pageId: 1,
        routerLink: '/money/settlement',
        children: null
      },
      {
        pageName: '欠费管理',
        pageId: 1,
        routerLink: '/money/arrearage',
        children: null
      },
      {
        pageName: '押金管理',
        pageId: 1,
        routerLink: '/money/deposit',
        children: null
      },
      {
        pageName: '费用流水',
        pageId: 1,
        routerLink: '/money/bill',
        children: null
      },
      {
        pageName: '初始费用设置',
        pageId: 1,
        routerLink: '/money/initial',
        children: null
      },
      {
        pageName: '费用类别设置',
        pageId: 1,
        routerLink: '/money/type',
        children: null
      }
    ]
  },
  {
    pageName: '系统设置',
    pageId: 1,
    routerLink: '/system',
    children: [
      {
        pageName: '账号管理',
        pageId: 1,
        routerLink: '/system/account',
        children: null
      },
      {
        pageName: '个人中心',
        pageId: 1,
        routerLink: '/system/personal',
        children: null
      },
      {
        pageName: '权限设置',
        pageId: 1,
        routerLink: '/system/permission',
        notMenu: true,
        children: [
          {
            pageName: '权限列表',
            pageId: 1,
            routerLink: '/system/permission/list',
            children: null
          },
          {
            pageName: '权限详情',
            pageId: 1,
            routerLink: '/system/permission/detail',
            children: null
          }
        ]
      },
      {
        pageName: '操作日志',
        pageId: 1,
        routerLink: '/system/log',
        children: null
      }
    ]
  },
  {
    pageName: '统计分析',
    pageId: 1,
    routerLink: '/statistic',
    children: null
  },
  // {
  //   pageName: 'demo',
  //   pageId: 1,
  //   routerLink: '/demo',
  //   children: [
  //     {
  //       pageName: 'table',
  //       pageId: 1,
  //       routerLink: '/demo/table',
  //       children: null
  //     },
  //     {
  //       pageName: 'tree',
  //       pageId: 1,
  //       routerLink: '/demo/tree',
  //       children: null
  //     },
  //     {
  //       pageName: 'dialog',
  //       pageId: 1,
  //       routerLink: '/demo/dialog',
  //       children: null
  //     },
  //   ]
  // },
];
