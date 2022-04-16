import type { Params } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PageWrapper from '../../../components/PageWrapper';
import { deslugifyShow } from '../utils/slugify';
import ShowPageProvider from '../contexts/ShowPageContext';
import ShowContent from './ShowContent';
import ShowHeroCard from './hero/ShowHeroCard';

const ShowPage = () => {
  const { slug } = useParams<Params<keyof { slug: string }>>();
  const externalId = deslugifyShow(slug);

  return (
    <PageWrapper sx={{ px: { xs: 0 } }} maxWidth={false}>
      <ShowPageProvider externalId={externalId}>
        <ShowHeroCard />
        <ShowContent />
      </ShowPageProvider>
    </PageWrapper>
  );
};

export default ShowPage;
