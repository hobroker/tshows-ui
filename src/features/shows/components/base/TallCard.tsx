import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PropsWithChildren, ReactNode } from 'react';
import { makeTallSmallImage } from '../../utils/image';

const StyledWrapper = styled(Paper)`
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledImage = styled('img')`
  aspect-ratio: 2/3;
  width: 100%;
  object-fit: cover;
`;

const StyledActions = styled(Box)`
  position: absolute;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(0.5)};
  text-align: right;
`;

interface Props {
  tallImage?: string | null;
  actions?: ReactNode;
  onClick?: () => void;
}

const TallCard = ({
  tallImage,
  actions,
  onClick,
  children,
}: PropsWithChildren<Props>) => (
  <StyledWrapper
    variant="elevation"
    elevation={4}
    sx={{
      ':hover': {
        boxShadow: 10,
      },
    }}
    onClick={onClick}
  >
    <StyledActions>{actions}</StyledActions>
    <StyledImage src={makeTallSmallImage(tallImage || '')} />
    {children}
  </StyledWrapper>
);

export default TallCard;
