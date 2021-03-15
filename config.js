const env = process.env

const config = {
    db: {
        host: env.MYSQL_HOST,
        user: env.MYSQL_USER,
        password: env.MYSQL_PASS,
        database: env.MYSQL_DB

    }
}
module.exports = config