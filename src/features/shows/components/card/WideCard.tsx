import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PropsWithChildren, ReactNode } from 'react';
import { makeWideSmImage } from '../../utils/image';

const StyledWrapper = styled(Paper)`
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows[3]};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows[6]};
  }
`;

const StyledImage = styled('img')`
  aspect-ratio: 3/2;
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
  <StyledWrapper variant="elevation" onClick={onClick}>
    <StyledActions>{actions}</StyledActions>
    <StyledImage src={makeWideSmImage(wideImage || '')} />
    {children}
  </StyledWrapper>
);

export default WideCard;
