import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ActionButton from '../../../components/base/ActionButton';

interface Props {
  isWatched: boolean;
  episodeId: number;
  toggleIsWatched: () => void;
}

const UpsertEpisodeAction = ({
  isWatched,
  toggleIsWatched,
  episodeId,
}: Props) => {
  const onMarkAsWatched = () => {
    console.log('Mark as watched', episodeId);
    toggleIsWatched();
  };

  return (
    <ActionButton
      size="small"
      tooltip="Mark as watched"
      onClick={onMarkAsWatched}
    >
      {isWatched ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
    </ActionButton>
  );
};

export default UpsertEpisodeAction;
