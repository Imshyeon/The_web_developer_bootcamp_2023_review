class Pet {
    constructor (name, age){
        console.log("IN PET CONSTRUCTOR")
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating...`;
    }
}

// 상속
class Cat extends Pet {
    constructor(name, age, livesLeft = 9){
        console.log("IN CAT CONSTRUCTOR")
        super(name, age);
        this.livesLeft =livesLeft;
    } 
    meow(){
        return 'MEOW!!!!!';
    }
}

class Dog extends Pet {
    bark(){
        return 'WOOOOOF!!!!!!'
    }
    eat(){
        return `${this.name} scarfs his food!`
    }
}

const cheese = new Cat('cheese', 9)
const wyatt = new Dog('Wyatt', 13)
cheese.eat()    // 'cheese is eating...'
cheese.meow()
wyatt.eat()     // 'Wyatt scarfs his food!'
wyatt.bark()