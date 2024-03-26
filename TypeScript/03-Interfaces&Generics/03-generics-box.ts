interface HasName {
  name: string;
}

class Person<T, U> implements HasName {
  name: string;
  test: T;
  test2: U;

  constructor(name: string, test: T, test2: U) {
    this.name = name;
    this.test = test;
    this.test2 = test2;
  }
}

/*
  // ErrorPerson 
  
  class ErrorPerson<T extends HasName> {
    content: T;

    constructor(content: T) {
      this.content = content;
    }
  }

  const error = new ErrorPerson(2);
  console.log(error) 
*/


class Box<T extends HasName>{
  content: T;

  constructor(content: T) {
    this.content = content
  }
}

let person = new Person('João', 1, 'qa')
let box = new Box(person);

console.log(box.content)