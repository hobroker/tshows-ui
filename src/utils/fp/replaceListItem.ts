import { curry } from 'rambda';

const replaceListItem = curry((predicate, value, list: []) =>
  list.map((item: any) => (predicate(item) ? value : item)),
);

export default replaceListItem;
