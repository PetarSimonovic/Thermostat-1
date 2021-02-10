'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('increases the temperature', function() {
    thermostat.up(1);
    expect(thermostat.currentTemperature()).toEqual(21);
  });

  it('decreases the tempreture', function() {
    thermostat.down(1);
    expect(thermostat.currentTemperature()).toEqual(19);
  });



}); // class end
