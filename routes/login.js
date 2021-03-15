const express = require('express')
const router = express.Router()
const mysql = require('mysql2')
const polcz = mysql.createConnection({
  host: 'localhost',
  user: 'regAPI',
  password: 'kncIWjXfmwLPmC0QElhh',
  database: 'zadanie1'
})

router.get('/', (req, res) => {
    res.render('login', null)
})

router.get('/rejestracja', (req, res) => {
    res.render('rejestracja', null)
})

router.post('/uzyt', (req, res) => {
    var login = req.body.username
    var haslo = req.body.password


    if (login && haslo) {
        polcz.query('SELECT * FROM konta WHERE username = ? AND password = ?',
        [login, haslo], (error, results, fields) => {
            if (results.length > 0) {
                req.session.loggedin = true
                req.session.username = login
                res.redirect('/todo')
            
            } else {
                res.json('Nieprawidłowy login i/lub hasło')
            }
        })
    } else {
        res.json('Podaj login i hasło')
    }
})
router.get('/todo', (req, res) => {
    if (req.session.loggedin) {
        res.json({
            succ: 'logged in'
        })
    } else {
        res.json({
            fail: 'not logged in'
        })
    }
})


module.exports = router