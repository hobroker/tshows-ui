import { useContext } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Alert, AlertTitle } from '@mui/material';
import TallEpisodeCollection from '../../../../shows/features/episode/components/TallEpisodeCollection';
import { UpNextContext } from '../contexts/UpNextContext';
import UpsertEpisodeAction from '../../../../shows/features/episode/components/UpsertEpisodeAction';
import Section from '../../../../../components/Section';

const UpNextSection = () => {
  const { episodes, loading } = useContext(UpNextContext);

  return (
    <Section title="Up next to watch" icon={<AccessTimeIcon />}>
      {loading || episodes.length ? (
        <TallEpisodeCollection
          episodes={episodes}
          loading={loading}
          actions={[UpsertEpisodeAction]}
        />
      ) : (
        <Alert severity="info" icon={false} sx={{ mt: 1 }}>
          <AlertTitle>Nothing here!</AlertTitle>
          Start watching some TV shows and they'll show up here.
        </Alert>
      )}
    </Section>
  );
};

export default UpNextSection;
