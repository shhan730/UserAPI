var express = require('express');
var app = express();

app.get('/users',(req,res)=> {
  res.send('user list');
});

app.listen(3000,function(){
  console.log('Server Running: 3000');
});