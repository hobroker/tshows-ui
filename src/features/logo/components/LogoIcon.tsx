import { Box } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { ReactComponent as LogoIconSvg } from '../assets/icon.svg';
import { Sx } from '../../../utils/types';

const StyledLogoIcon = styled(LogoIconSvg)(({ theme, color }) => ({
  fill: theme.palette[color as Color].main,
}));

type Color = 'primary' | 'secondary';
interface Props {
  sx: Sx;
  color?: Color;
}

const LogoIcon = ({ sx, color = 'primary' }: Props) => (
  <Box sx={sx}>
    <StyledLogoIcon color={color} />
  </Box>
);

export default LogoIcon;
