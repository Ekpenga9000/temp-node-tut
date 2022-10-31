const os = require('os');

const uptime = os.uptime()
const user = os.userInfo()
console.log(`${user.username}'s system has been up for ${uptime} seconds`);

const systemInfo = {
    user: user.username,
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMen: os.freemem(),
    runningTime: (((os.uptime()/60)/ 60)/24).toFixed() + " days",
}

console.log(systemInfo)