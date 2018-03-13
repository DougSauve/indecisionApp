class Person {
  constructor(name = 'Nobody', age = 0) {
    //regular function body.
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi! I'm ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor (name, age, major) {
    super(name, age);

    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor (name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting () {

     return this.homeLocation ? `${super.getGreeting()} They are from ${this.homeLocation}.`: super.getGreeting();
  }
}

const me = new Traveler('Doug Sauve', 29, 'bio');
const you = new Traveler();

console.log(me);
console.log(you);

console.log(you.getGreeting());
console.log(me.getGreeting());
