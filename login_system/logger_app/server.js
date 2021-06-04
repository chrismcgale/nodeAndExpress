const express = require("express");
const morgan = require("morgan")

const app = express()
const port = 3000

app.use(morgan(``))

app.get('/', (req, res) => {
    res.end("Morgan Logger App")
});

app.listen(port, () => {    
    console.log(`Listening to requests on http://localhost:${port}`)
})