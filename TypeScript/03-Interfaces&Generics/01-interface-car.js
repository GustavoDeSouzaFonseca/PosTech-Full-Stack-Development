var MyCar = /** @class */ (function () {
    function MyCar(brand, model, year) {
        this.brand = brand,
            this.model = model,
            this.year = year;
    }
    MyCar.prototype.startStop = function () {
        console.log("Starting ".concat(this.model));
    };
    return MyCar;
}());
var myCar = new MyCar('Volkswagen', 'Polo GTS', 2023);
myCar.startStop();
