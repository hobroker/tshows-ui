import React from 'react';
import WideCardCollection from '../../../components/card/WideCardCollection';
import { EpisodeActionProps, EpisodeWithShowType } from '../types';
import WideEpisodeCard from './WideEpisodeCard';
import TallEpisodeCardPlaceholder from './TallEpisodeCardPlaceholder';

interface Props {
  loading: boolean;
  episodes: Array<EpisodeWithShowType>;
  actions?: React.JSXElementConstructor<EpisodeActionProps>[];
}

const WideEpisodeCollection = ({ episodes, loading, actions = [] }: Props) => (
  <WideCardCollection
    loading={loading}
    scroll
    PlaceholderComponent={TallEpisodeCardPlaceholder}
  >
    {episodes.map((episode) => (
      <WideEpisodeCard
        key={episode.externalId}
        episode={episode}
        actions={actions}
      />
    ))}
  </WideCardCollection>
);

export default WideEpisodeCollection;
