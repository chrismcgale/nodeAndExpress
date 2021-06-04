
const express = require("express");
const app = express();

const PORT = 3000;

app.set('view engine', 'pug')

app.get('/', function(req, res){
    res.render('index',{title: "Express View",h1:"Express",p:"Template"});
})

app.listen(PORT, () => { console.log("Server started on Port 3000")})