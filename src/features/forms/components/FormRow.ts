import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const FormRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: 80,
  alignItems: 'center',
  '&:not(:last-child)': {
    marginBottom: theme.spacing(2),
  },
}));

export default FormRow;
