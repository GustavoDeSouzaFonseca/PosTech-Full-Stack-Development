class Animal {
  //ENCAPSULATION
  private specie: string;

  doSound() {
    console.log(`The animal product the sound`);
  }

  getSpecie() {
    return this.specie
  }
}

//HERITAGE - DOG receive methods and atributtes from An ANIMAL
class Dog extends Animal {
  //POLIMORFISM - using the same method with different return
  doSound(): void {
    console.log(`The dog bark`);
  }
}

class Cat extends Animal {
  doSound(): void {
    console.log(`The cat meow`)
  }
}

const myAnimal = new Dog();
myAnimal.doSound()