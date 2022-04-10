import { curry } from 'rambda';

const updateListItem = curry((predicate, modifier, list: []) =>
  list.map((item: any) => (predicate(item) ? modifier(item) : item)),
);

export default updateListItem;
