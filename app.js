const express = require('express')
const app = express()
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const multiparty = require('multiparty');
require('./mongo');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
app.use(cors());
app.use(express.static('public')); // fuck;;;
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req,res)=>{
  res.render('main.html');
})

var router = require('./routes/index')(express, fs, path, Users, multiparty);
app.use('/', router);



app.listen(80, ()=>{
  console.log('Server porting on 3222');
})
