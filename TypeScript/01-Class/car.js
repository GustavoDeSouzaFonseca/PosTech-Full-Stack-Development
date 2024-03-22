var Car = /** @class */ (function () {
    function Car(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    Car.prototype.showInfo = function () {
        return "Brand: ".concat(this.brand, ", Model ").concat(this.model);
    };
    return Car;
}());
Car.prototype.toSpeedUp = function () {
    return "O ".concat(this.model, " are speeding up!");
};
var myCar = new Car('Toyota', 'Supra');
console.log(myCar.showInfo());
console.log(myCar.toSpeedUp());
