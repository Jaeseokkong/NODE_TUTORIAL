 const fs = require('fs');
// 파일 생성
// fs.writeFile('example.txt', "this is an example", (error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('File successfully created')
//         fs.readFile('example.txt', 'utf-8', (error, file) => {
//             if (error) {
//                 console.log(error)
//             } else {
//                 console.log(file)
//             }
//         })
//     }
// });

// 파일 이름 변경
// fs.rename('example.txt', 'example2.txt', (error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log('Successfully renamed the file');
//     }
// })

// 파일 내용 추가
// fs.appendFile('example2.txt', 'Some data being appended', (error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log('Successfully appended data to file')
//     }
// })

// 파일 삭제
fs.unlink('example2.txt', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Successfully deleted the file');
    }
})