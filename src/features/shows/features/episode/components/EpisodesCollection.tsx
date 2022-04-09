import { Episode, EpisodeShowFragment } from '../../../../../generated/graphql';
import TallCardCollection from '../../../components/base/TallCardCollection';
import Section from '../../../../home/components/Section';
import TallEpisodeCard from './TallEpisodeCard';

interface Props {
  loading: boolean;
  episodes: Array<
    Omit<Episode, 'show'> & {
      show: EpisodeShowFragment;
    }
  >;
}

const EpisodesCollection = ({ episodes, loading }: Props) => (
  <Section title="Up next to watch">
    <TallCardCollection loading={loading} scroll>
      {episodes.map((episode) => (
        <TallEpisodeCard key={episode.externalId} episode={episode} />
      ))}
    </TallCardCollection>
  </Section>
);

export default EpisodesCollection;
