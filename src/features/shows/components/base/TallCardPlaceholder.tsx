import { styled } from '@mui/material/styles';
import { Skeleton } from '@mui/material';

const ImagePlaceholder = styled(Skeleton)`
  aspect-ratio: 2/3;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(0.5)};
  transform: inherit;
`;

const TallCardPlaceholder = () => <ImagePlaceholder />;

export default TallCardPlaceholder;
