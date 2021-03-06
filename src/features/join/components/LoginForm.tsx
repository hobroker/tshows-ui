import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from '../hooks/useYupValidationResolver';
import { StaticRoute } from '../../router/constants';

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
          type="password"
          variant="outlined"
          fullWidth
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register('password')}
        />
      </Box>
      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
        <Link marginLeft="auto" variant="body2" color="error" href="#">
          Forgot password?
        </Link>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Button type="submit" variant="contained" size="large" fullWidth>
          Log in
        </Button>
      </Box>
      <Box textAlign="center">
        <Typography
          variant="subtitle2"
          sx={{ color: (theme) => theme.palette.text.secondary }}
        >
          Don't have an account{' '}
          <Link color="primary" href={StaticRoute.Register}>
            Create an account
          </Link>
        </Typography>
      </Box>
    </form>
  );
};

export default LoginForm;
