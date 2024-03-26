function firstElement(arr: number[]): number {
  return arr[0];
}

function firstElementGenerics<T>(arr: T[]): T {
  return arr[0];
}

let number = firstElementGenerics([1, 2, 3]);
let words = firstElementGenerics(['hello', 'world', '!']);

console.log(number);
console.log(words);