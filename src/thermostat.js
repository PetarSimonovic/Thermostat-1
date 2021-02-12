'use strict';

class Thermostat {

  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
    this.maxTemp = 25;
  };

  currentTemperature() {
    return this.temperature;
  };

  currentPowerSavingMode() {
    return this.powerSavingMode;
  };

  up(amount) {
    if (this.temperature + 1 > this.maxTemp) {
      throw new Error('That is above the maximum temperature');
    };
    this.temperature += 1;
  };

  down(amount) {
    if (this.temperature - 1 < 10) {
      throw new Error('That is below the minimum temperature');
    };
    this.temperature -= 1;
  };

  powerModeOff() {
    this.powerSavingMode = false;
    this.maxTemp = 32;
  };

  powerModeOn() {
    this.powerSavingMode = true;
    this.maxTemp = 25;
  };

  reset() {
    this.temperature = 20;
  };

  energyUsage() {
    if (this.temperature < 18) {
      return "This temperature is low usage";
    };
    if (this.temperature > 18 && this.temperature <= 25) {
      return "This temperature is medium usage";
    };
    return "This temperature is high usage";
  };

}
