const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const polcz = mysql.createConnection({
  host: 'localhost',
  user: 'regAPI',
  password: 'kncIWjXfmwLPmC0QElhh',
  database: 'zadanie1'
})

router.get('/', (req, res) => {
    res.render('rejestracja', null)
})

router.post('/rej', (req, res) => {
    var login = req.body.username
    var password = req.body.password
    var email = req.body.email

    if (login && password && email) {
        polcz.query('SELECT email FROM konta WHERE email=?', [email], 
        (error, results, fields) => {
            if (results.length ==0) {
                 polcz.query('INSERT INTO konta (username, email, password) VALUES (?, ?, ?)',
                [login, email, password])
                res.json({
                    success: 'Konto prawidłowo założone.' 
                })
            } else {
                res.json({
                    failure: 'Wprowadzony adres email obecny w bazie danych.'
                })
            }
        })    
       
    } else {
        res.json({
            failure: 'Wprowadź wszystkie dane.'
        })
    }
})
module.exports = router