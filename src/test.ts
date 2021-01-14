interface Human { //js�� interface ����,�׷��� js�� ��ȯ�� �ڵ庸�� �ȳ���.
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
    public name: string; //js���� public, private, �̷��� �����ϴ� �� ����
    public age: number; //  private age: number���� �ϸ� �Ʒ� sayHello2���� ������.
    
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