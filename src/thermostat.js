'use strict';

class Thermostat {

  constructor(){
    this.temperature = 20;
  };

  currentTemperature(){
    return this.temperature;
  };

  up(amount){
    this.temperature += amount;
  };

  down(amount){
    this.temperature -= amount;
  };

}
