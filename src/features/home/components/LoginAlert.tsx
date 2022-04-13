import { Alert, Link, Typography } from '@mui/material';
import { StaticRoute } from '../../router/constants';

const LoginAlert = () => (
  <Alert icon={false} severity="warning">
    <Typography variant="body1">
      You're browsing anonyomously. You can{' '}
      <Link href={StaticRoute.Login}>login</Link> or{' '}
      <Link href={StaticRoute.Register}>register</Link> to for the full
      experience.
    </Typography>
  </Alert>
);

export default LoginAlert;
