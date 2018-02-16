const express = require('express')
const app = express()
const CORS = require('cors')();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
app.use(CORS);

app.get('/main', (req,res)=>{
  fs.readFile('main.html', (error,data)=>{
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(data);
  })
})
app.listen(3222, ()=>{
  console.log('Server porting on 3222');
})
