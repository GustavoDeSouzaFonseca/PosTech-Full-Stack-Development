function firstElement(arr) {
    return arr[0];
}
function firstElementGenerics(arr) {
    return arr[0];
}
var number = firstElementGenerics([1, 2, 3]);
var words = firstElementGenerics(['hello', 'world', '!']);
console.log(number);
console.log(words);
