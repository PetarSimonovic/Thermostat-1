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
    if (this.temperature + amount > this.maxTemp) {
      throw new Error('That is above the maximum temperature');
    };
    this.temperature += amount;
  };

  down(amount) {
    if (this.temperature - amount < 10) {
      throw new Error('That is below the minimum temperature');
    };
    this.temperature -= amount;
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

}
