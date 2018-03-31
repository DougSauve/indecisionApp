class OldSyntax {
  constructor() {
    this.something = "hi mom";
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return(`${this.something} is cool`);
  }
}

const oldSyntax = new OldSyntax();
const oldCheck = oldSyntax.getGreeting;
console.log(oldCheck());


class NewSyntax {
  name = 'pargs';
  getGreeting = () => {
    return(`${this.name} is cool`);
  }
}

const newSyntax = new NewSyntax();
const check = newSyntax.getGreeting;
console.log(check());
