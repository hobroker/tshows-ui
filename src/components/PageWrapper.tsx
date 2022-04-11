import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

const PageWrapper = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  minHeight: `calc(100vh - ${theme.spacing(8)})`,
  display: 'flex',
  flexDirection: 'column',
}));

export default PageWrapper;
