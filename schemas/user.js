// const e = require('express')
// const db = require('../db.js')

let sql = require('mysql2')

const connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'farm_2_table'
})
connection.connect()

const addUser = (fname, lname, email, phone, password) => {
    connection.query("INSERT INTO user(fname, lname, email, phone, password) VALUES (?, ?, ?, ?, ?)", [fname, lname, email, phone, password], function (err, res) {
        if (err) console.log(err)

        console.log("done")
    })    
}

const checkPassword = (email, submitted_password) => {
    let is_valid = true
    
    connection.query("SELECT * from user WHERE email=? AND password=?", [email, submitted_password], function (err, res) {
        if (res.length > 0) is_valid = true
    })

    return is_valid
} 

module.exports = {
    addUser,
    checkPassword
}