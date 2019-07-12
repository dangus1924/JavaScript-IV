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
    grading (student, max, min) {
        max = 30;
        min = -30;
        return student.grade - Math.random() * (max-min) + max
    }

};

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
};

const peter = new student({
    name: 'Peter P. Askew',
    age: 25,
    location: 'Neptune, New Jersey',
    previousBackground: 'Dog Walker',
    className: 'JVPT8',
    favSubjects: ['CSS', 'Java', 'Math']

})

const anton = new student ({
    name: 'Anton Prefection',
    age: 23,
    location: 'Berlin, Germany',    
    previousBackground: 'Producer',
    className: 'JVPT8',
    favSubjects: ['Bootstrap', 'CSS', 'jQuery']
})

const josh = new Instructor({
    name: 'josh Paddle',
    age: 39,
    location: 'Churchhil, England',
    specialty: 'best teacher ever',
    favLanguage: 'javaScript',
    catchPhrase: 'Practice makes perfect'
})

const pat = new Instructor({
    name: 'Pat Winman',
    age: 34,
    location: 'British, England',
    specialty: 'play video games',
    favLanguage: 'java',
    catchPhrase: 'Never give up, EVER!' 
})

const waldo = new Instructor({
    name: 'Waldo Laster',
    age: 30,
    location: 'Ungo, England',
    specialty: 'Pro TV watcher',
    favLanguage: 'Python',
    catchPhrase: 'When you run out of gas call AAA'
})

const james = new PM({
    name: 'James Knight',
    age: 45,
    location: 'New York, England',
    specialty: 'working out',
    favLanguage: 'CSS',
    catchPhrase: 'Watch me drive away',
    grandClassName: 'JS4',
    favInstructor: 'Timothy',
})

const marie = new PM({
    name: 'Marie Lex',
    age: 41,
    location: 'New York, New York',
    specialty: 'jogging',
    favLanguage: 'HTML',
    catchPhrase: 'I am short so what!',
    grandClassName: 'JS1',
    favInstructor: 'Andy',
})

console.log(anton)
console.log(peter)
console.log(josh)
console.log(waldo)
console.log(james)
console.log(marie)
console.log(pat)
console.log(pat.age)
console.log(james.location)
console.log(waldo.specialty)
console.log(anton.speak())
