import { Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const CardTitle = styled((props: TypographyProps) => (
  <Typography variant="body2" className="title" {...props} />
))`
  color: ${({ theme }) => theme.palette.common.white};
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: bold;
  transition: ${({ theme }) => theme.transitions.create('background')};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(0.5, 1, 1)};
  text-shadow: 0 0 8px ${({ theme }) => alpha(theme.palette.primary.main, 0.7)};
  background: linear-gradient(
    to top,
    ${({ theme }) => alpha(theme.palette.common.black, 0.7)},
    ${({ theme }) => alpha(theme.palette.common.black, 0.02)}
  );
`;

export default CardTitle;
