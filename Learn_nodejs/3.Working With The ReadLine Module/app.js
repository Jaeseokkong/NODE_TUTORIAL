const readline = require('readline');
//사용자의 입력과 출력을 처리하기 위한 인터페이스
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

//사용자에게 묻는 함수
rl.question(`What is ${ num1 } + ${ num2 }? \n`, (userInput) => {
    if (userInput.trim() == answer) {
        rl.close();
    } else {
        rl.setPrompt('Incorrect response please try again\n')
        rl.prompt();
        //사용자의 재시도를 처리한다 (엔터 키 눌렀을 때 호출)
        rl.on('line', (userInput) => {
            if (userInput.trim() == answer) {
                rl.close();
            } else {
                rl.setPrompt(`Your answer of ${ userInput } is incorrect try again\n`)
                rl.prompt();
            }
        })
    }
})

rl.on('close', () => {
    console.log('Correct!!!')
});