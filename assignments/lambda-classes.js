// CODE here for your Lambda Classes
class Person {
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
        this.gender = attrs.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

const john = new Person({
    name: 'John',
    age: 23,
    location: 'Texas',
    gender: "M"
});
const benny = new Person({
    name: 'Benny',
    age: 29,
    location: 'Texas',
    gender: "M"
});

// console.log(john);
// console.log(benny);


class Instructor extends Person {
    constructor(instAttrs){
        super(instAttrs);
        console.log(instAttrs);
        this.specialty = instAttrs.specialty;
        this.favLanguage = instAttrs.favLanguage;
        this.catchPhrase = instAttrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${this.subject}.`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${this.subject}.`
    }
}
const johnny = new Instructor ({
    name: 'Johnny',
    age: 30,
    location: 'Texas',
    gender: "M",
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Rolling with the homies`
});
const fred = new Instructor({
    name: 'Fred',
    age: 37,
    location: 'Bedrock',
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

//   console.log(johnny);
//   console.log(fred);

class Student extends Person {
    constructor(studAttrs) {
        super(studAttrs);
        console.log(studAttrs);
    }
}