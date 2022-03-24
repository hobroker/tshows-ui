import {
  Box,
  Button,
  FormControlLabel,
  Link,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { grey } from '@mui/material/colors';
import useYupValidationResolver from '../hooks/useYupValidationResolver';

type LoginFormInput = {
  email: string;
  password: string;
};

const validationSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
});

const LoginForm = () => {
  const resolver = useYupValidationResolver(validationSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({
    resolver,
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Box display="flex" height={80}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register('email')}
        />
        <Box width={48} />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register('password')}
        />
      </Box>
      <Box marginBottom={2} display="flex">
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Remember me"
        />
        <Link marginLeft="auto" variant="body2" color="error" href="#">
          Forgot password?
        </Link>
      </Box>
      <Box marginBottom={2}>
        <Button type="submit" variant="contained" size="large" fullWidth>
          Log in
        </Button>
      </Box>
      <Box textAlign="center">
        <Typography variant="subtitle2" color={grey[700]}>
          Don't have an account{' '}
          <Link color="primary" href="/join">
            Create an account
          </Link>
        </Typography>
      </Box>
    </form>
  );
};

export default LoginForm;
