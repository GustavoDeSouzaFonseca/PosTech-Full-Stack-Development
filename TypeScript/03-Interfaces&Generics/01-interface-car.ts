interface Car {
  brand: string;
  model: string;
  year: number;
  startStop(): void;
}

class MyCar implements Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand,
    this.model = model,
    this.year = year
  }

  startStop(): void {
    console.log(`Starting ${this.model}`)
  }
}

const myCar = new MyCar('Volkswagen', 'Polo GTS', 2023);
myCar.startStop()