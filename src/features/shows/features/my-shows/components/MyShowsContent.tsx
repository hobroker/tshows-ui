import { useContext } from 'react';
import { MyShowsContext } from '../contexts/MyShowsContext';

const MyShowsContent = () => {
  const { shows } = useContext(MyShowsContext);

  console.log('shows', shows);

  return <div>hello</div>;
};

export default MyShowsContent;
