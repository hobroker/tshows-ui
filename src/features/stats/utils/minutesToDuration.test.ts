import minutesToDuration from './minutesToDuration';

describe('minutesToDuration', () => {
  it('should return value in minutes', () => {
    expect(minutesToDuration(45)).toBe('45 minutes');
    expect(minutesToDuration(59)).toBe('59 minutes');
  });

  it('should return value in hours', () => {
    expect(minutesToDuration(65)).toBe('1 hour');
    expect(minutesToDuration(60 * 2 + 2)).toBe('2 hours');
    expect(minutesToDuration(60 * 6)).toBe('6 hours');
  });

  it('should return value in days', () => {
    expect(minutesToDuration(60 * 24)).toBe('1 day');
    expect(minutesToDuration(60 * 24 * 2)).toBe('2 days');
    expect(minutesToDuration(60 * 24 * 5)).toBe('5 days');
  });

  it('should return value in weeks', () => {
    expect(minutesToDuration(60 * 24 * 7)).toBe('1 week');
    expect(minutesToDuration(60 * 24 * 7 * 2)).toBe('2 weeks');
  });

  it('should return value in months', () => {
    expect(minutesToDuration(60 * 24 * 7 * 30)).toBe('1 month');
    expect(minutesToDuration(60 * 24 * 7 * 30 * 4)).toBe('4 months');
  });
});
