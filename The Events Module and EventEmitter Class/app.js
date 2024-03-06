const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

//이벤트 리스너 생성
eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);
})

//이벤트 트리거
eventEmitter.emit('tutorial', 1,2);

class Person extends EventEmitter {
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let jaeseok = new Person('JaeSeok')
let cheolsu = new Person('CheolSu')

cheolsu.on('name', () => {
    console.log('my name is ' + cheolsu.name)
})

jaeseok.on('name', () => {
    console.log('my name is ' + jaeseok.name)
})

jaeseok.emit('name');
cheolsu.emit('name');