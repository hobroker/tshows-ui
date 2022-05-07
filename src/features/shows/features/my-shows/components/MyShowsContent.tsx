import { useContext } from 'react';
import { Box } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import { MyShowsContext } from '../contexts/MyShowsContext';
import ShowsCollection from '../../../components/ShowsCollection';
import Section from '../../../../../components/Section';

const MyShowsContent = () => {
  const { shows, loading } = useContext(MyShowsContext);

  return (
    <Box>
      <Section title="My Shows" icon={<ListIcon />}>
        <ShowsCollection shows={shows} loading={loading} scroll={false} />
      </Section>
    </Box>
  );
};

export default MyShowsContent;
