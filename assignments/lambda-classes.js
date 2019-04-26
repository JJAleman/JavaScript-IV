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
}