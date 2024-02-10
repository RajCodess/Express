let sql = require('mysql2')

const connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'farm_2_table'
})
connection.connect()

module.exports = connection