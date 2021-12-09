const path = require('path');

module.exports = {
  db: {
    mysql: {
      port: 3306,
      host: '172.16.233.132',
      user: 'root',
      password: '123456',
      database: 'dev_dc',
      connectionLimit: 10
    },
    redis: {
      port: 6379,
      host: '172.16.233.132',
      db: 3,
      options: {
        return_buffers: false,
        auth_pass: ''
      }
    }
  },

  oAuth: {
    github: {
      client_id: '6625cb27769b1bc52415',
      client_secret: '5ead47391fd5b132957bc4bf84400d5cacd1e748'
    }
  },

  root: path.normalize(__dirname + '/..'),
  appPath: 'src',
  tempUploads: 'tempUploads',
  uploads: 'uploads',
  port: 9000,
  tokenSecret: 'test',
  isUpdateAdmin: true,
  accessControlAllowOrigin: 'http://localhost:3000',
  adminName: 'admin',
  adminPassword: '123456',
  socketioPath: '/testsocketiopath',
  draftPostRedisKey: 'DRAFTPSOTKEY'
};
