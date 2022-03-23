import React from 'react';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => (
  <div>
    <h2>login</h2>
    <Link to="/" component={RouterLink}>
      Home
    </Link>
  </div>
);

export default Login;
