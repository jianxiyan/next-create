
async function getUser(ctx) {
    const sql = `
        select id, userid, username from dim_user;
    `
    const allUser = await ctx.execSql(sql)
    return allUser
}

module.exports = {
    getUser,
}