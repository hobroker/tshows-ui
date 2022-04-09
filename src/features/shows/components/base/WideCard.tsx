import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PropsWithChildren, ReactNode } from 'react';
import { makeWideSmallImage } from '../../utils/image';

const StyledWrapper = styled(Paper)`
  aspect-ratio: 3/2;
  position: relative;
  top: 0;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;
`;

const StyledImage = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledActions = styled(Box)`
  position: absolute;
  width: 100%;
  text-align: right;
`;

interface Props {
  wideImage?: string | null;
  actions?: ReactNode;
  onClick?: () => void;
}

const WideCard = ({
  wideImage,
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
    <StyledImage src={makeWideSmallImage(wideImage || '')} />
    {children}
  </StyledWrapper>
);

export default WideCard;
