import { styled } from '@mui/material/styles';

const FluidPageWrapper = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  minHeight: `calc(100vh - ${theme.spacing(4)})`,
  display: 'flex',
  flexDirection: 'column',
}));

export default FluidPageWrapper;
