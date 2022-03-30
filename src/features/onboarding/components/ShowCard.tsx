import { Box, Chip, IconButton, Paper, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';

interface Props {
  tallImage: string;
  name: string;
}

const StyledWrapper = styled(Paper)`
  aspect-ratio: 2/3;
  position: relative;
  top: 0;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: bold;
  transition: background 0.2s ease-in-out;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(0.5, 1, 1)};
  text-shadow: 0 0 8px ${({ theme }) => alpha(theme.palette.primary.main, 0.7)};
  background: linear-gradient(
    to top,
    ${({ theme }) => alpha(theme.palette.common.black, 0.7)},
    ${({ theme }) => alpha(theme.palette.common.black, 0.02)}
  );
`;

const StyledImage = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledActions = styled(Box)`
  padding: ${({ theme }) => theme.spacing(0.5)};
  position: absolute;
  width: 100%;
  text-align: right;
`;

const StyledIconButton = styled(IconButton)`
  background-color: ${({ theme }) => alpha(theme.palette.common.white, 0.5)};

  &:hover {
    background-color: ${({ theme }) => alpha(theme.palette.common.white, 0.8)};
  }
`;

const ShowCard = ({ tallImage, name }: Props) => (
  <StyledWrapper
    variant="elevation"
    elevation={4}
    sx={{
      ':hover': {
        boxShadow: 10,
      },
    }}
  >
    <StyledActions>
      <Chip label={<AddIcon />} />
    </StyledActions>
    <StyledImage src={tallImage} />
    <StyledTitle variant="body2" className="title">
      {name}
    </StyledTitle>
  </StyledWrapper>
);

export default ShowCard;
