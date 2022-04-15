import { Box, Link, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PropsWithChildren, ReactNode } from 'react';
import { makeTallSmImage } from '../../utils/image';

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
  topChildren?: ReactNode;
  href?: string;
}

const TallCard = ({
  tallImage,
  actions,
  onClick,
  children,
  topChildren,
  href,
}: PropsWithChildren<Props>) => {
  const image = <StyledImage src={makeTallSmImage(tallImage || '')} />;

  return (
    <StyledWrapper variant="elevation" onClick={onClick}>
      {topChildren}
      <StyledActions>{actions}</StyledActions>
      {href ? <Link href={href}>{image}</Link> : image}
      {children}
    </StyledWrapper>
  );
};

export default TallCard;
