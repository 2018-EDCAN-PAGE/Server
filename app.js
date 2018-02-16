const express = require('express')
const app = express()
const CORS = require('cors')();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
app.use(CORS);
app.use(express.static('public')); // fuck;;;
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/main', (req,res)=>{
  res.render('main.html');
})
app.listen(3222, ()=>{
  console.log('Server porting on 3222');
})
