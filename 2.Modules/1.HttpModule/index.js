const http = require('node:http');
const port = 64000;

const server = http.createServer((req, res) => {
    console.log(req);
    res.write("hello my site is nice");
    res.write(" dev is ut");
    res.end("nice");
});

server.listen(port, () => {
    console.log("thumbs up I am listining on port", port);
})
