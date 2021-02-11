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

  it('raises an error when you go below min temp', function() {
    expect(function(){thermostat.down(11);}).toThrowError("That is below the minimum temperature");
  });

  it('raises an error when you go above max temp', function() {
    expect(function(){thermostat.up(6);}).toThrowError("That is above the maximum temperature");
  });

  it('defaults as saving power mode as on', function() {
    expect(thermostat.currentPowerSavingMode()).toBe(true);
  });

  it('should change the power saving mode to off', function() {
    thermostat.powerModeOff();
    expect(thermostat.currentPowerSavingMode()).toBe(false);
  });

  it('should change the power saving mode to on', function() {
    thermostat.powerModeOn();
    expect(thermostat.currentPowerSavingMode()).toBe(true);
  });

  it('should raise the max temp to 32 when PSM is off', function() {
    thermostat.powerModeOff()
    thermostat.up(6)
    expect(thermostat.currentTemperature()).toEqual(26)
  });

  it('should be able to change the temperature to 20 with a reset function', function() {
    thermostat.up(5)
    thermostat.reset()
    expect(thermostat.currentTemperature()).toEqual(20);
  });



}); // class end
