namespace BasicMath01 {
  export function sum(a: number, b: number): number {
    return a + b;
  }

  export function subtract(a: number, b: number): number {
    return a - b;
  }
}

namespace AdvancedMath01 {
  export function exponent(base: number, exponent: number): number {
    return Math.pow(base, exponent)
  }
}

console.log(BasicMath01.sum(5, 20));
console.log(BasicMath01.subtract(15, 5));
console.log(AdvancedMath01.exponent(5, 3));