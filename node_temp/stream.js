const http = require("http");
const fs = require("fs");

//Better for very large files as sends info piece by piece
const server = http.createServer(function(req, res){
    const stream = fs.createReadStream('test.json');
    stream.pipe(res);
})

server.listen(3000, () => console.log("App started on PORT 3000"))

//Buffers work similarily

const buf = Buffer.alloc(4)

buf.write("HEY!")

console.log(buf[0]) //ascii for H

buf[1] = 111 // o

