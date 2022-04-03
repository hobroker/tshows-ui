import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const PageWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  minHeight: `calc(100vh - ${theme.spacing(8)})`,
  display: 'flex',
  justifyContent: 'center',
}));

export default PageWrapper;
