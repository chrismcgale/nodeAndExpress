// Performing tasks on a particular path is called routing
const http = require("http");

const routes = {
    //search localhost:8000 to view
    '/':function index(request, response){
        response.writeHead(200);
        response.end("Node Routing");
    },
    //search localhost:8000/aboutus to view
    '/aboutus':function aboutus(request, response){
        response.end("ABOUT");
    }
}

//Route the user to different pages
http.createServer(function(req, res){
    if(req.url in routes){
        return routes[req.url](req, res);
    }
}).listen(process.env.PORT || 8000);

