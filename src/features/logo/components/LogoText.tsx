import { Box } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { ReactComponent as LogoSvg } from '../assets/logo.svg';
import { Sx } from '../../../utils/types';

const StyledLogo = styled(LogoSvg)(({ theme, color }) => ({
  fill: theme.palette[color as Color].main,
  height: '100%',
}));

type Color = 'primary' | 'secondary';
interface Props {
  sx: Sx;
  color?: Color;
}

const LogoText = ({ sx, color = 'primary' }: Props) => (
  <Box sx={{ display: 'flex', ...sx }}>
    <StyledLogo color={color} />
  </Box>
);

export default LogoText;
