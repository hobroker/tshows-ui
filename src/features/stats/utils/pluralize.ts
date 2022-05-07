const pluralize = (value: number, input: string) =>
  value === 1 ? input : `${input}s`;

export default pluralize;
