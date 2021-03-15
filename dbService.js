const mysql = require('mysql2/promise')
const config = require('./config')

const dbService = async (sql, params) => {
    const polcz = await mysql.createConnection(config.db)
    const [results, ] = await polcz.execute(sql, params)

    return results
}

module.exports =  dbService