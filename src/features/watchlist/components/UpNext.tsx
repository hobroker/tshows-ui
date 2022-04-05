import { useListUpNextQuery } from '../../../generated/graphql';

const UpNext = () => {
  const { data } = useListUpNextQuery();

  console.log('data', data);

  return <div>hello</div>;
};

export default UpNext;
