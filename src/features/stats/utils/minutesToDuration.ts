import pluralize from './pluralize';

const minutesToDuration = (minutes: number) => {
  let value = minutes;

  if (value < 60) {
    return `${value} ${pluralize(value, 'minute')}`;
  }

  value = Math.floor(value / 60);
  if (value < 24) {
    return `${value} ${pluralize(value, 'hour')}`;
  }

  value = Math.floor(value / 24);
  if (value < 7) {
    return `${value} ${pluralize(value, 'day')}`;
  }

  value = Math.floor(value / 7);
  if (value < 30) {
    return `${value} ${pluralize(value, 'week')}`;
  }

  value = Math.floor(value / 30);

  return `${value} ${pluralize(value, 'month')}`;
};

export default minutesToDuration;
