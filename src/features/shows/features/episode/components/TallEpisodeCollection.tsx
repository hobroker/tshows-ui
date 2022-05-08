import React from 'react';
import TallCardCollection from '../../../components/card/TallCardCollection';
import { EpisodeActionProps, EpisodeWithLoading } from '../types';
import TallEpisodeCard from './TallEpisodeCard';
import TallEpisodeCardPlaceholder from './TallEpisodeCardPlaceholder';

interface Props {
  loading: boolean;
  episodes: Array<EpisodeWithLoading>;
  actions?: React.JSXElementConstructor<EpisodeActionProps>[];
}

const TallEpisodeCollection = ({ episodes, loading, actions = [] }: Props) => (
  <TallCardCollection
    loading={loading}
    scroll
    PlaceholderComponent={TallEpisodeCardPlaceholder}
  >
    {episodes.map((episode) => (
      <TallEpisodeCard
        key={episode.externalId}
        episode={episode}
        actions={actions}
      />
    ))}
  </TallCardCollection>
);

export default TallEpisodeCollection;
