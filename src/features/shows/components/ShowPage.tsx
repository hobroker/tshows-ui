import type { Params } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import PageWrapper from '../../../components/PageWrapper';
import { deslugifyShow } from '../utils/slugify';
import ShowPageProvider from '../contexts/ShowPageContext';
import ShowContent from './ShowContent';
import ShowHeroCard from './hero/ShowHeroCard';

const ShowPage = () => {
  const { slug } = useParams<Params<keyof { slug: string }>>();
  const externalId = deslugifyShow(slug);

  return (
    <PageWrapper sx={{ px: { xs: 0 } }}>
      <ShowPageProvider externalId={externalId}>
        <Container>
          <ShowHeroCard />
          <ShowContent />
        </Container>
      </ShowPageProvider>
    </PageWrapper>
  );
};

export default ShowPage;
