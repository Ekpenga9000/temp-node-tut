// What are global variables?

// These are variables that can be accessed anywhere in the file without they include

// __filename - file name
// __dirname - path to current directory
// require - function to use modules
// module - info about the current module (file)
// procress - info about env where the program is being executed

console.log(__dirname)

const numbers = require('./5-utils');
const { five, ten, fifteen } = require('./4-number'); 
const data = require('./6-alternative-flavour');
const os = require('os');
const path = require('path');
const { readFileSync, readFile, writeFileSync, writeFile } = require('fs');

require('./7-mind-granade')

numbers(five)
numbers(ten)
numbers(fifteen)

console.log(data.aPerson)
console.log(data.items)

const user = os.userInfo()

const currentInfo = {
    name: user.username,
    runningTime: `This system has been running for ${(((os.uptime() / 60) / 60) / 24).toFixed()} days`,
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    release: os.release(),
    version: os.version()
}

console.log(currentInfo)

const filePath = path.join('./content', 'subfolder', 'test.txt');

console.log(filePath);

const base = path.basename(filePath)

console.log(base)

const absolute = path.resolve(__dirname, './content', 'subfolder', 'test.txt');

console.log(absolute);
console.log(path.sep);

console.log(readFileSync('./content/first.txt', 'utf-8'));

writeFileSync(
    './content/result-sync.txt',
    `This is a test`,
    { flag: "a"}
)

readFile('./content/first.txt', "utf-8", (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    writeFile(
        './content/result-async.txt',
        "This is also a text",
        (err, result) => {
            if (err) {
                console.log(err)
                return
            }
        }
    )
})

const http = require('http');

const newServer = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome back')
    }   
})

newServer.listen(9000)