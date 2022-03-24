import { Box } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { ReactComponent as LogoIconSvg } from '../assets/icon.svg';

const StyledLogoIcon = styled(LogoIconSvg)(({ theme }) => ({
  fill: theme.palette.primary.main,
}));

interface Props {
  width: number;
}

const LogoIcon = ({ width }: Props) => (
  <Box sx={{ width }}>
    <StyledLogoIcon />
  </Box>
);

export default LogoIcon;
