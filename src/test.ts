interface Human { //js는 interface 없음,그래서 js로 변환한 코드보면 안나옴.
    name:string
}
const person = {
    name: 'sss'
}
const sayHello = (person:Human):string => {
    return `HELLO ${person.name}!!!`
}

console.log(sayHello(person));

class Human2 { 
    public name: string; //js에는 public, private, 이렇게 선언하는 것 없음
    public age: number; //  private age: number으로 하면 아래 sayHello2에서 사용못함.
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
const person2 = new Human2('ss',20);

const sayHello2 = (person:Human2): string => {
    return `Hello2 ${person.name} ${person.age}` 
}
console.log(sayHello2(person2));

export {};