const fs = require('fs');
const zlib = require('zlib');
//const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();
//const readStream = fs.createReadStream('./example.txt', 'utf-8')

//const writeStream = fs.createWriteStream('./example2.txt')
//const writeStream = fs.createWriteStream('./example2.txt.zip')

const readStream = fs.createReadStream('./example2.txt.zip')
const writeStream = fs.createWriteStream('uncompressed.txt')

// 기촌 chunk 를 읽고 쓰는 방식
// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// })

// 읽고 쓰기를 한번에 가능 
// pipe를 하용하면 위 과정을 간략하게 작성가능
// readStream.pipe(writeStream);

// zip 압축
//readStream.pipe(gzip).pipe(writeStream);

// zip 압출 풀기
readStream.pipe(gunzip).pipe(writeStream);
