import React from 'react';
import TallCardCollection from '../../../components/base/TallCardCollection';
import { ActionProps } from '../types';
import type { EpisodeType } from '../../../../home/contexts/types';
import TallEpisodeCard from './TallEpisodeCard';
import TallEpisodeCardPlaceholder from './TallEpisodeCardPlaceholder';

interface Props {
  loading: boolean;
  episodes: Array<EpisodeType>;
  actions?: React.JSXElementConstructor<ActionProps>[];
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
