import { styled } from '@mui/material/styles';
import { Box, Skeleton } from '@mui/material';

const ImagePlaceholder = styled(Skeleton)`
  aspect-ratio: 2/3;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(0.5)};
  transform: inherit;
`;

const TitlePlaceholder = styled(Skeleton)`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  width: 100%;
  height: ${({ theme }) => theme.spacing(4.75)};
  transform: inherit;
`;

const TallEpisodeCardPlaceholder = () => (
  <Box>
    <ImagePlaceholder />
    <TitlePlaceholder />
  </Box>
);

export default TallEpisodeCardPlaceholder;
