const { readFileSync, writeFileSync } = require('fs');
console.log('Start')
const test = readFileSync('./content/subfolder/test.txt', "utf-8")
const first = readFileSync('./content/first.txt', "utf-8")
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync(
    './content/result-sync.txt', `Here's are the result for all 3: ${test}, ${first}, ${second}`,
    {flag: "a"}
)

console.log('done with this task');
console.log('starting the next one.')

