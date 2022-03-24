import { Box } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { ReactComponent as LogoSvg } from '../assets/logo.svg';

const StyledLogo = styled(LogoSvg)(({ theme }) => ({
  fill: theme.palette.secondary.main,
}));

interface Props {
  width?: number;
}

const Logo = ({ width = 150 }: Props) => (
  <Box sx={{ width }}>
    <StyledLogo />
  </Box>
);

export default Logo;
