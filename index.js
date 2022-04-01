const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/spanish', function (req, res) {
  res.send('Hola Mundo')
})


app.get('/frances', function (req, res) {
    res.send('Salut Monde')
  })


app.get('/griego', function (req, res) {
    res.send('Γειά σου Κόσμε')
  })


  app.get('/sueco', function (req, res) {
    res.send('Hej världen')
  })


  app.get('/turco', function (req, res) {
    res.send('Selam Dünya')
  })

  
app.listen(3000)