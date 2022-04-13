import { Alert, Link, Typography } from '@mui/material';
import { RoutePath } from '../../router/constants';

const LoginAlert = () => (
  <Alert icon={false} severity="warning">
    <Typography variant="body1">
      You're browsing anonyomously. You can{' '}
      <Link href={RoutePath.Login}>login</Link> or{' '}
      <Link href={RoutePath.Register}>register</Link> to for the full
      experience.
    </Typography>
  </Alert>
);

export default LoginAlert;
