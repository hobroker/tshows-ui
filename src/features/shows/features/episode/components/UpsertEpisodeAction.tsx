import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ActionButton from '../../../components/card/ActionButton';

interface Props {
  isWatched: boolean;
  onClick: () => void;
  size?: 'small' | 'large';
}

const UpsertEpisodeAction = ({ isWatched, onClick, size = 'small' }: Props) => (
  <ActionButton
    size={size}
    tooltip={isWatched ? 'Mark as unwatched' : 'Mark as watched'}
    onClick={onClick}
    sx={{
      fontSize: { small: '1.5rem', large: '2rem' }[size],
    }}
  >
    {isWatched ? (
      <CheckCircleIcon sx={{ fontSize: 'inherit' }} />
    ) : (
      <CheckCircleOutlineIcon sx={{ fontSize: 'inherit' }} />
    )}
  </ActionButton>
);

export default UpsertEpisodeAction;
