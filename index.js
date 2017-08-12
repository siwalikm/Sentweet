const http = require('http');
var express = require('express');
var app = express();
var server = require('http').createServer(app);

const hostname = '127.0.0.1';
const port = 3000;

app.use('/', express.static('html'));
app.get("/", function (req, res) {
    res.sendFile(__dirname + '/html/start.html');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
