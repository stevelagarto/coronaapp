const mysql = require('mysql')
const db = require('../db/config')

const connection = mysql.createConnection({
  host: db.host,
  user: db.user,
  password: db.password,
  database: db.database

})
const sql = 'SELECT * from users'
connection.connect(function (err) {
  if (err) throw err
  console.log('Connected!')
})

connection.query(sql, function (err, rows, fields) {
  if (err) throw err

  for (const i in rows) {
    console.log('Name: ' + rows[i].name)
  }
})
