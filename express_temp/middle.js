
const express = require("express");
const app = express();

//MiddleWare function, each time you request the server, this executes
//Good for login/authentication
const myLogger = function(req, res, next){
    console.log("log");
    next();
}

const requestTime = function(req, res, next){
    req.reqTime = Date.now();
    next();
}

app.use(myLogger)
app.use(requestTime)

//Much shorter than node
app.get("/", function(req, res){
    res.send(`Current time: ${req.reqTime}`);
})

app.listen(3000, () => { console.log("Server started on Port 3000")})


