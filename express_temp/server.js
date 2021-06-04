
const express = require("express");
const app = express();

app.use(express.static('public'))

app.get("/", function(req, res){
    res.send(`Static files`);
})

app.listen(3000, () => { console.log("Server started on Port 3000")})


