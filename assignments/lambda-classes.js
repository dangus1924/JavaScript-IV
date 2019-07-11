// CODE here for your Lambda Classes
class Person{
    constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    }
    speak() {
       return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
};

class Instructor extends Person {
    constructor(base) {
        super(base);
        this.specialty = base.specialty;
        this.favLanguage = base.favLanguage;
        this.catchPhrase = base.catchPhrase;
    }
    demo() {
        
    }
}