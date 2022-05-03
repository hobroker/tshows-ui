const minutesToDuration = (minutes: number) => {
  if (minutes < 60) {
    return `${minutes} minutes`;
  }

  if (minutes < 60 * 24) {
    return `${Math.floor(minutes / 60)} hour(s)`;
  }

  if (minutes < 60 * 24 * 7) {
    return `${Math.floor(minutes / 60 / 24)} day(s)`;
  }

  if (minutes < 60 * 24 * 30) {
    return `${Math.floor(minutes / 60 / 24 / 7)} week(s)`;
  }

  return `${Math.floor(minutes / 60 / 24 / 7 / 30)} month(s)`;
};

export default minutesToDuration;
