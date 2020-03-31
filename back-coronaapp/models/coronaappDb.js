const mysql = require('mysql')
const db = require('../db/config')

const connection = mysql.createConnection({
  host: db.host,
  user: db.user,
  password: db.password,
  database: db.database

})
const sql = 'SELECT * from user'
connection.connect(function (err) {
  if (err) throw err
  console.log('Connected to database coronaapp!')
})

exports.getAllUsers = async () => {
  await connection.query(sql, function (err, rows) {
  if (err) throw err
  console.log(rows)
  return rows
  })
  
  

}
