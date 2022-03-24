import { Box } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { ReactComponent as LogoSvg } from '../assets/logo.svg';

const StyledLogoSvg = styled(LogoSvg)(({ theme }) => ({
  fill: theme.palette.secondary.main,
}));

const Logo = () => (
  <Box sx={{ width: 150 }}>
    <StyledLogoSvg />
  </Box>
);

export default Logo;
