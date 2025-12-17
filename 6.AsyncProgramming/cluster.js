const cluster = require('cluster');
const http = require('http');
const os = require('os');


const numCPUs = os.cpus().length; // 14 -1 // 13


// master node code
if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    console.log('Number of CPUs is ', numCPUs);

    for(let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

} else {
    // slave node code - actual server 

    const server = http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Hello World\n by cluster node ' + process.pid);
    })

    server.listen(8089, () => {
        console.log(`slave pid ${process.pid} `);
    });
}








