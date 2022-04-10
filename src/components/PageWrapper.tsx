import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

const PageWrapper = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  minHeight: `calc(100vh - ${theme.spacing(8)})`,
  display: 'flex',
  justifyContent: 'center',
}));

export default PageWrapper;
