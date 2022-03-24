import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { grey } from '@mui/material/colors';
import useYupValidationResolver from '../hooks/useYupValidationResolver';

type LoginFormInput = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(6, 'Username must be at least 6 characters')
    .max(20, 'Username must not exceed 20 characters'),
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
});

const RegisterForm = () => {
  const resolver = useYupValidationResolver(validationSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({ resolver });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Box display="flex" height={80}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          error={!!errors.username}
          helperText={errors.username?.message}
          {...register('username')}
        />
        <Box width={48} />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register('email')}
        />
      </Box>
      <Box display="flex" height={80}>
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register('password')}
        />
      </Box>
      <Box marginBottom={2}>
        <Button type="submit" variant="contained" size="large" fullWidth>
          Sign Up
        </Button>
      </Box>
      <Box textAlign="center">
        <Typography variant="subtitle2" color={grey[700]}>
          Already have an account?{' '}
          <Link color="primary" href="/login">
            Log in
          </Link>
        </Typography>
      </Box>
    </form>
  );
};

export default RegisterForm;