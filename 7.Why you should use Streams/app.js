const fs = require('fs')
// 용량 큰 파일 생성
// const filePath = './largefile.txt';
// const repeatCount = 100000; // 예시로 1000번 반복
// const textToWrite = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n";
// fs.writeFileSync(filePath, ''); // 파일 생성 또는 초기화
// for (let i = 0; i < repeatCount; i++) {
//     fs.appendFileSync(filePath, textToWrite); // 텍스트 추가
// }

// 파일 읽기 (파일 전체를 읽은 후 콜백함수 호출)
fs.readFile('./largefile.txt', (error, file) => {
    if (error) {
        console.log(error);
    } else {
        console.log(file);
    }
})

// stream 파일 읽기 (조각으로 읽음과 동시에 호출함)
const readStream = fs.createReadStream('./largefile.txt', 'utf-8');
readStream.on('data', (chunk) => {
    console.log(chunk)
})


