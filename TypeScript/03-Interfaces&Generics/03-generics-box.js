var Person = /** @class */ (function () {
    function Person(name, test, test2) {
        this.name = name;
        this.test = test;
        this.test2 = test2;
    }
    return Person;
}());
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
var Box = /** @class */ (function () {
    function Box(content) {
        this.content = content;
    }
    return Box;
}());
var person = new Person('João', 1, 'qa');
var box = new Box(person);
console.log(box.content);
