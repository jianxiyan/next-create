const router = require('koa-router')();

const user = require('../app/user/user');

router.use('/activity/user', user.routes(), user.allowedMethods());

module.exports = router;