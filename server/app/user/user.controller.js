
const userModel = require('./user.model');

async function getUser(ctx) {
    const allUser = await userModel.getUser(ctx);
    ctx.body = {
        success: 1,
        message: '',
        data: allUser
    };
}

module.exports = {
    getUser,
}