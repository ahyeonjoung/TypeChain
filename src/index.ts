class Human{
    public name: string;
    public age: number;
    public gender: string;
    constructor(name:string, age:number,gender:string){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
}

const ahyeon=new Human("ahyeon",25,"female");
const sayHi= (person:Human): String =>{
    return `Hello ${person.name} ${person.age} ${person.gender}` ;
}

console.log(sayHi(ahyeon))

export {};