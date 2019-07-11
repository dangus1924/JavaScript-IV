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
        return `Today we are learning about ${subject}.`
    }

    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class student extends Person {
    constructor(option) {
        super(option);
        this.previousBackground = option.previousBackground;
        this.className = option.className;
        this.favSubjects = option.favSubjects;

    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment() {
        `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge() {
        `${this.name} has begun sprint challenge on ${subject}`
    }
};

class PM extends Instructor {
    constructor(pmOption) {
        super(pmOption);
        this.grandClassName = pmOption.grandClassName;
        this.favInstructor = pmOption.favInstructor;
    }
    standUp() {
      return `${this.name} announces to ${channel}, @channel standy times!`  
    }
    debugsCode() {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
} 

