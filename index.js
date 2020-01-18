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
  res.json(users);
});

app.listen(3000,function(){
  console.log('Server Running: 3000');
});