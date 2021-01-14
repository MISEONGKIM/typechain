interface Human {
    name:string
}
const person = {
    name: 'sss'
}
const sayHello = (person:Human):string => {
    return `HELLO ${person.name}!!!`
}

console.log(sayHello(person));

export {};