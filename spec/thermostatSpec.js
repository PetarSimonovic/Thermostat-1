'use strict';

describe('Thermostat', function(){

  it('starts at 20 degrees', function(){
    var thermostat = new Thermostat();
    expect(thermostat.currentTemperature()).toEqual(20)
  });

});
