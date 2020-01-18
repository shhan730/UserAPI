var express = require('express');
var app = express();
var morgan = require('morgan');

var users = [
  {id: 1, name: 'A'},
  {id: 2, name: 'B'},
  {id: 3, name: 'C'},
]
app.use(morgan('dev'));

app.get('/users',(req,res) => {
  req.query.limit = req.query.limit || 10;
  const limit = parseInt(req.query.limit, 10);

  if(Number.isNaN(limit)){ return res.status(400).end() }
  res.json(users.slice(0,limit));
});

app.get('/users/:id',(req,res) => {
  const id = parseInt(req.params.id, 10);
  const user = users.filter((user) => user.id === id)[0];
  res.json(user);
})

app.listen(3000,function(){
  console.log('Server Running: 3000');
});