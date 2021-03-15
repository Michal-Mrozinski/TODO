// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()
const paszport = require('passport')
//const loggin = require('../loginService')
const dbService = require('../dbService')
/*  This is a sample API route. */

//router.post('/login', paszport.authenticate('local', {session: false}))
//paszport.use(User.createStrategy())

router.post('/', async (req, res, next) => {
  var login = req.body.params
  var password = req.body.params

  if (login && password) {
    dbService(`SELECT * FROM konta WHERE username = ? AND password = ?`,
[login, haslo], (error, results, fields) => {
      if (results.length > 0) {
  try {
  res.json({
    confirmation: 'success',
    resource: req.params.resource,
    query: req.query, // from the url query string
    data: results
  })} catch (err) {
    console.error(`Error yyy eror`, err.message)
    next(err)
  }}
})}
})
  

router.get('/:resource/:id', (req, res) => {
  res.json({
    confirmation: 'success',
    resource: req.params.resource,
    id: req.params.id,
    query: req.query // from the url query string
  })
})

module.exports = router
