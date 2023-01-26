const express = require('express');
//const path=require('path')
const app=express();
app.use(express.json())//parsing incomming json data from postman
const mongoose=require('./config/moongose');
const router=require('./router/route');

//app.use(express.static(__dirname + '/router/public'));
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));//parse data

const bodyParser=require('body-parser')
app.use(router);
app.use(express.json())



app.listen(3000,()=>{
console.log('listening on port 3000');
});