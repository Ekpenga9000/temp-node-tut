const path = require('path');

const joinPath = path.join(__dirname, "./content", "subfolder", "test.txt")

const base = path.basename(joinPath);

console.log(joinPath, base);

const absolute = path.resolve(__dirname, "./content", "subfolder", "text.txt")

console.log(absolute)

