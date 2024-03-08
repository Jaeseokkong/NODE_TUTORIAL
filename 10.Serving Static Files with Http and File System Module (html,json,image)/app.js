const http = require('http')
const fs = require('fs');
// HTML 처리
// http.createServer((req, res) => {
//     const readStream = fs.createReadStream('./static/index.html')
//     res.writeHead(200, {'Content-type': 'text/html'});
//     readStream.pipe(res);
// }).listen(3000);

// JSON 처리
// http.createServer((req, res) => {
//     const readStream = fs.createReadStream('./static/example.json')
//     res.writeHead(200, {'Content-type': 'application/json'});
//     readStream.pipe(res);
// }).listen(3000);

// 이미지 처리
http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/example.png')
    res.writeHead(200, {'Content-type': 'image/png'});
    readStream.pipe(res);
}).listen(3000);