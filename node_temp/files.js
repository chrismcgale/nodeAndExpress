const fs = require("fs"); //filesystem

//async
fs.readFile("test.txt", 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data)
})

//sync
const data = fs.readFileSync("text.txt", {encoding:'utf8', flag:'r'});
console.log(data);

fs.stat('test.txt', (err, stats) => {
    if(err) {
        console.error(err)
        return
    }

    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.size)
})

const content = [{
    type:"Node App"
}];

fs.writeFileSync('test.json', JSON.stringify(content));
//a+ means open for read/write and create if not exists **APENDS AT END**
//a just writing but still creates
//r+ opens for reading
//w+ write but *OVERWRITES*
fs.writeFile('text.txt', content, {flag:'w+'}, err => {
    if(err){
        console.log(err)
        return
    }
    console.log("success")
})

//Deletes file
fs.unlink('text.txt', err => {
    if(err)
    console.log(err)
    return
})