const fs = require('fs');
// 폴더 생성
// fs.mkdir('tutorial', (error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         fs.writeFile('./tutorial/example.txt', '123', (error) => {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log('Successfully created file')
//             }
//         })
//     }
// })

// 파일 삭제 
// fs.unlink('./tutorial/example.txt', (error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         // 폴더 삭제 (폴더 삭제 전 내부 파일이 없어야 삭제 가능)
//         fs.rmdir('tutorial', (error) => {
//             if (error) {
//                 console.log(error)
//             } else {
//                 console.log('successfully deleted the folder')
//             }
//         });
//     }
// })

// 폴더 내부 파일 순회하여 삭제 (files : 배열)
fs.readdir('example', (error, files) => {
    if (error) {
        console.log(error)
    } else {
        for (let file of files) {
            fs.unlink('./example/' + file, (error) => {
                if (error) {
                    console.log(error)
                } else {
                    console.log('successfully deleted file');
                }
            })
        }
    }
})