const express = require('express')
const app = express()

let id;
let Name; 
let LastName;
let Age;

app.use(express.json());

app.post('/', function(request, response){
  id = request.body.id
  Name = request.body.name
  LastName = request.body.lastName
  Age = request.body.old
  console.log(request.body);      // your JSON
   response.send(Name);    // echo the result back
});

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/id', function (req, res) {
  res.send(id);
  console.log(id);
})

app.get('/Name', function (req, res) {
  res.send(Name);
  console.log(Name);
})


app.get('/LastName', function (req, res) {
  res.send(LastName);
  console.log(LastName);
})

app.get('/Age', function (req, res) {
  res.send(Age);
  console.log(Age);
})
  


app.listen(3000)


