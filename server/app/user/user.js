const router = new require('koa-router')();
const user = require('./user.controller');


router.get('/get_user', user.getUser);

module.exports = router;