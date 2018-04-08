import { Record, Typed } from './Model';

describe('Typed.Enum', () => {

  it('should support typed Enum', () => {

    const Directions = Typed.Enum({
      NORTH: 'North',
      EAST: 'East',
      WEST: 'West',
      SOUTH: 'South'
    });

    const TestRecord = Record({
      value: Directions
    });

    console.log(TestRecord({ value: 'NORTH' }));
    expect(TestRecord({ value: 'NORTH' })).toEqual(TestRecord({ value: Directions.NORTH }));
    expect(TestRecord({ value: 'North' })).toEqual(TypeError('North should be in NORTH,EAST,WEST,SOUTH'));
  });

});
