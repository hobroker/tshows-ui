import React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactComponent as GoogleLogoSvg } from '../assets/google.svg';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderColor: theme.palette.grey[400],
  '&:hover': {
    borderColor: theme.palette.grey[500],
  },
}));

interface Props {
  onClick: () => void;
  disabled?: boolean;
}

const GoogleButton = ({ onClick, disabled = false }: Props) => (
  <StyledButton
    variant="outlined"
    size="large"
    onClick={onClick}
    disabled={disabled}
  >
    <Box height={20} width={20} marginRight={1}>
      <GoogleLogoSvg />
    </Box>
    Join with Google
  </StyledButton>
);

export default GoogleButton;
