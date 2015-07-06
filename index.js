var settings = module.exports = {
  env: {
    name: 'dev',
    mode: 'development',
    host: '127.0.0.1',
    port: 3020,
    bindIp: "0.0.0.0",

    NODE_ENV: 'development',
    PORT: 3020,
    BINDIP: "0.0.0.0"
  },

  secretKey: 'quick',

  app: {
    protocol: 'http',
    host: '127.0.0.1',
    port: 3020,
    domain: 'dev.www.trillers.com.cn',
    domainPort: 80,
    context: '/'
  },

  api: {
    url: 'http://dev.www.trillers.com.cn/api'
  },

  logging: {
    reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
    level: 'DEBUG'
  },

  redis:{
    mode:'single',
    host: '127.0.0.1',
    port: 6379,
    auth:'',
    sentinel: {
      hosts:[{host: '127.0.0.1', port: 26379}],
      masterName:'mymaster'
    }
  },

  mongo: {
    host: "127.0.0.1",
    port: 27017,
    db: "oxford",
    username: '',
    password: ''
  },

  session: {
    secretKey: 'quick',
    expires: 60 // minutes
  },

  wechat: {
    appKey: 'wxa51b0be8694ba7b5',
    appSecret: '23c92d23482f991426894c40dcf07452',
    token: 'seedtrip',
    encodingAESKey: 'u66H0iFUqhQNCUMV4zAwMpy3fIFDR7a3GLSAm1rVz7d'
  },

  locationServer: {
    host: 'api.map.baidu.com',
    port: 80,
    ak: 'PwCZ3FQOyXeHDQKRQZvsrL8k'
  },
  
  resources: {
    app: {
      name: "mit"
    }
  }
};
