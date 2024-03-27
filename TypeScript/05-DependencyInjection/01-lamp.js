var LightSwitch = /** @class */ (function () {
    function LightSwitch() {
    }
    LightSwitch.prototype.powerOn = function () {
        console.log('Lamp on!!! * * * * ');
    };
    return LightSwitch;
}());
var Lamp = /** @class */ (function () {
    function Lamp(lightSwitch) {
        this.lightSwitch = lightSwitch;
    }
    Lamp.prototype.trigger = function () {
        this.lightSwitch.powerOn();
    };
    return Lamp;
}());
var lightSwitch = new LightSwitch();
var lamp = new Lamp(lightSwitch);
lamp.trigger();
