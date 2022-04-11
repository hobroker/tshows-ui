import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

const PageWrapper = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  minHeight: `calc(100vh - ${theme.spacing(4)})`,
  display: 'flex',
  flexDirection: 'column',
}));

export default PageWrapper;
