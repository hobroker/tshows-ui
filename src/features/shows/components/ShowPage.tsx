import { useParams } from 'react-router-dom';
import type { Params } from 'react-router-dom';
import PageWrapper from '../../../components/PageWrapper';
import { deslugifyShow } from '../utils/slug';

const ShowPage = () => {
  const { slug } = useParams<Params<keyof { slug: string }>>();
  const id = deslugifyShow(slug);

  console.log('id', id);

  return (
    <PageWrapper>
      <h1>Show Page</h1>
    </PageWrapper>
  );
};

export default ShowPage;
