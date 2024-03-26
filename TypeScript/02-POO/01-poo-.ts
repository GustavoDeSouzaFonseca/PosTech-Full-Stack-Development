class Pessoa {
  name: string;
  age: string;

  constructor(name: string, age: string) {
    this.name = name,
    this.age = age
  }

  salution() {
    console.log(`Hello, my name is ${this.name}, and I'm ${this.age} years old`)
  }
}