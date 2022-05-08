import { useContext } from 'react';
import { Box } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import { MyShowsContext } from '../contexts/MyShowsContext';
import ShowsCollection from '../../../components/ShowsCollection';
import Section from '../../../../../components/Section';
import { Status } from '../../../../../generated/graphql';

export const ShowStatusTitleMap = {
  [Status.None]: '',
  [Status.InWatchlist]: 'In Watchlist',
  [Status.FinishedWatching]: 'Finished Watching',
  [Status.StoppedWatching]: 'Stopped Watching',
} as const;

const MyShowsContent = () => {
  const { showsMap } = useContext(MyShowsContext);

  return (
    <Box>
      {Object.entries(showsMap).map(([status, shows]) => (
        <Section
          key={status}
          title={ShowStatusTitleMap[status as Status]}
          icon={<ListIcon />}
        >
          <ShowsCollection shows={shows} loading={false} scroll={false} />
        </Section>
      ))}
    </Box>
  );
};

export default MyShowsContent;
