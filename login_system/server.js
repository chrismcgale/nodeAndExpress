const express = require("express")
const path = require("path");
const bodyparser = require("body-parser");
const session = require("express-session");
const {v4: uuidv4} = require("uuid")

const router = require('./router');

const app = express();

const port = process.env.PORT || 3000

//Serializes data
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))


app.set('view engine', 'ejs')


// load static assets
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))


app.use(session({
    // To make session secret and unique do uuidv4()
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

app.use('/route', router);

//home
app.get('/', (req, res) => {
    res.render('base', {title:"Login"})
})


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`)
})