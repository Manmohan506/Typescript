"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
}
class david extends Human {
    constructor(name, age, profession) {
        super(name, age, profession);
    }
    changeAge(age) {
        this.age = age;
    }
}
let David = new Human("David", 20, "DevOps");
