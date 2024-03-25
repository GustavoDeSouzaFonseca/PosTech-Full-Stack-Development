let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ['joao', 'maria', 'samuel'];

// how can we access
let primeiroNumero = numbers[0]; // Obtém o primeiro número (1)
let segundoNome = names[1];      // Obtém o segundo nome ("João")

// methods to manipulate array 

// .pop - Remove the last element of array and return this element
const lastNumber = numbers.pop()
console.log(`We remove the last name ${lastNumber} from ${numbers}`)

// .push -  Add one or more elements at the final of an array and return the lenght of this array
const push = names.push('claudia')
console.log(`We add claudia at ${names} and now the lenght is ${push}`)

// .shift() - Remove the first element of an array and return this element
const firstName = names.shift()
console.log(`We remove the first name ${firstName} from ${numbers}`)

// .unshift() - Add one or more elements at the init an array and return the lenght of this array
const unshift = numbers.unshift(0, 1, 2, 3)
console.log(`We add 0,1,2,3 at ${numbers} and now the lenght is ${unshift}`)

// .reduce() - execute a function reducer (created by you) for each element of this array, resulting and unic return value
let sum: string;

sum = names.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 'My name is: ')

console.log(sum)

// .reverse() - invert the itens of an array. The first element turns the last element and the same with the last, now is the first
numbers.reverse()
console.log(numbers);