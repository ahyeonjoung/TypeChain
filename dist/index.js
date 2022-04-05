"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const ahyeon = new Human("ahyeon", 25, "female");
const sayHi = (person) => {
    return `Hello ${person.name} ${person.age} ${person.gender}`;
};
console.log(sayHi(ahyeon));
//# sourceMappingURL=index.js.map