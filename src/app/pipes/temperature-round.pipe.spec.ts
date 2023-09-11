import { TemperatureRoundPipe } from './temperature-round.pipe';

describe('TemperatureRoundPipe', () => {
  it('create an instance', () => {
    const pipe = new TemperatureRoundPipe();
    expect(pipe).toBeTruthy();
  });
});
