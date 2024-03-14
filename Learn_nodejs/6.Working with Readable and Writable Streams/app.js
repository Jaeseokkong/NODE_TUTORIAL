const fs = require('fs');
const readStream = fs.createReadStream('./example.txt', 'utf-8');
const writeStream = fs.createWriteStream('example2.txt')
readStream.on('data', (chunk) => {
    writeStream.write(chunk);
})

// 이 방식은 파일을 조각조각 읽어 데이터를 스트리밍하여 작업을 즉시 처리한다.
// 비동기 방식으로 데이터를 읽고 쓴다.