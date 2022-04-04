import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from '../hooks/useYupValidationResolver';
import FormRow from '../../forms/components/FormRow';
import { RoutePath } from '../../router/constants';

type LoginFormInput = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(6, 'Name must be at least 6 characters')
    .max(20, 'Name must not exceed 20 characters'),
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
      <FormRow>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          error={!!errors.name}
          helperText={errors.name?.message}
          {...register('name')}
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
      </FormRow>
      <FormRow>
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register('password')}
        />
      </FormRow>
      <Box marginBottom={2}>
        <Button type="submit" variant="contained" size="large" fullWidth>
          Sign Up
        </Button>
      </Box>
      <Box textAlign="center">
        <Typography
          variant="subtitle2"
          sx={{ color: (theme) => theme.palette.text.secondary }}
        >
          Already have an account?{' '}
          <Link color="primary" href={RoutePath.Login}>
            Log in
          </Link>
        </Typography>
      </Box>
    </form>
  );
};

export default RegisterForm;
