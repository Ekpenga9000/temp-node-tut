// npm

// npm global command come with node
// npm --version to know the version of npm

// local dependency - use it only in this particular project.
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packagename>
// sudo install -g <packageName> (mac)

//package.json - manifest file( stores important information about the project/package)

// Ways to have the package.json file

// manual approach (create the package.json in the root, create properties etc)
// Another way is to run npm init (follow the step by step, press enter to skip)
// npm init -y (everything is setup as default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);

console.log(newItems)