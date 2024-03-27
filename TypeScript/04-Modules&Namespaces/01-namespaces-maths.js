var BasicMath;
(function (BasicMath) {
    function sum(a, b) {
        return a + b;
    }
    BasicMath.sum = sum;
    function subtract(a, b) {
        return a - b;
    }
    BasicMath.subtract = subtract;
})(BasicMath || (BasicMath = {}));
var AdvancedMath;
(function (AdvancedMath) {
    function exponent(base, exponent) {
        return Math.pow(base, exponent);
    }
    AdvancedMath.exponent = exponent;
})(AdvancedMath || (AdvancedMath = {}));
console.log(BasicMath.sum(5, 20));
console.log(BasicMath.subtract(15, 5));
console.log(AdvancedMath.exponent(5, 3));
