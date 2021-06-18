const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
require('./config/db.config')
const routes= require('./routers/student.routes')


app.set('view engine', 'pug');
app.set('index', './views');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('<h2>Welcome to Students Database!!</h2><h3>Click here to add student to the <b><a href="/home">Database</a></b></h3><h3>Click here to get list from <b><a href="/student">Database</a></b></h3>'))

app.get('/home',function(req,res){
    res.sendFile((__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });
  
app.use('/student', routes)

app.listen(port, () => console.log(`Example app listening on port port!`))
