const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mern',
 {useNewUrlParser: true, useUnifiedTopology: true})
 .then(()=>{console.log('MongoDB Connection has been made.')})
 .catch((err)=>{console.log('Connection  failed. Detail:',err)});

module.exports= mongoose