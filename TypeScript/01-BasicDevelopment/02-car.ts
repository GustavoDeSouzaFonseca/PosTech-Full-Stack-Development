interface Car {
  toSpeedUp: () => string;
}

class Car {
  constructor(public brand: string, public model: string) {}

  showInfo() {
    return `Brand: ${this.brand}, Model: ${this.model}`;
  }
}

Car.prototype.toSpeedUp = function() {
  return `O ${this.model} are speeding up!`
}

let myCar = new Car('Toyota', 'Supra');
console.log(myCar.showInfo())
console.log(myCar.toSpeedUp())