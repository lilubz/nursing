
const PROXY_CONFIG = [
  // {
  //   context: [
  //     "/wenZhouGas",
  //     "/dataImport",
  //   ],
  //   target: "http://218.75.127.46:18080",// 测试服务器
  //   secure: false,
  //   // "pathRewrite": {
  //   //   "^/wenZhouGas": ""
  //   // }
  // },
  {
    context: [
      "/intelligentOldAgeCare"
    ],
    target: "http://192.168.1.77:8801",// 喜孩
    secure: false,
    "pathRewrite": {
      // "^/": "/"
    }
  },
  // {
  //   context: [
  //     "/wenZhouGas",
  //     "/upload",
  //   ],
  //   target: "http://60.190.114.126", // 线上
  //   secure: false,
  //   // "pathRewrite": {
  //   //   "^/wenZhouGas": ""
  //   // }
  // },
];

module.exports = PROXY_CONFIG;
