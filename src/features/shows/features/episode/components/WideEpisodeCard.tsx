import WideCard from '../../../components/base/WideCard';

interface Props {
  wideImage?: string | null;
}

const WideEpisodeCard = ({ wideImage }: Props) => (
  <WideCard wideImage={wideImage} />
);

export default WideEpisodeCard;
