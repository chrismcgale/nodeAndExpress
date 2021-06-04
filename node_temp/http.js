const http = require("http")
const https = require("https")

//Make a Server
const hostname = "127.0.0.1"
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write("Hello");
    res.end();
})


server.listen(port, hostname, ()=> {
    //Needs to be `
    console.log(`Server running at http://${hostname}:${port}/`);
})


//HTTP request
http.get('http://api.open-notify.org/astros.json', resp => {
    let data = ""
    resp.on('data', chunk =>{
        data += chunk
    });

    resp.on('end', () => {
        let jsondata = JSON.parse(data)
        console.log(jsondata)
    });
})

//HTTP Post Request

const data = JSON.stringify({
    name:"JOHN DOE",
    JOB:"Content Writter"
});

//Long Option

const options = {
    hostname:'reqres.in', 
    path:'/api/users',
    method:'POST',
    header:{
        'Content-Type':'application/json'
    }
};

const req = https.request(options, (res) => {
    let body = "";
    console.log("Status Code: ", res.statusCode)

    res.on('data', (chunk) => {
        body += chunk
    })

    res.on('end', () => {
        console.log("Body:", JSON.parse(body));
    })
})

req.write(data)
req.end()

//Or short with axios (Look above long)

const axios = require("axios")

axios.post('https://reqres.in/api/users', data).then(res => {
    console.log(`Status Code:${res.status}`);
    console.log(`Body:${JSON.stringify(res.data)}`);
}).catch(err => {
    console.log(err)
})