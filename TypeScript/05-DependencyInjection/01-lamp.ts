class LightSwitch {
  powerOn(): void {
    console.log('Lamp on!!! * * * * ')
  }
}

class Lamp {
  private lightSwitch: LightSwitch;

  constructor(lightSwitch: LightSwitch) {
    this.lightSwitch = lightSwitch;
  }

  trigger(): void {
    this.lightSwitch.powerOn();
  }
}

const lightSwitch = new LightSwitch();
const lamp = new Lamp(lightSwitch);
lamp.trigger();