import { curry } from 'ramda';

const updateListItem = curry((predicate, modifier, list: []) =>
  list.map((item: any) => (predicate(item) ? modifier(item) : item)),
);

export default updateListItem;
