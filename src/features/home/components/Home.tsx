import React from 'react';
import { Link } from 'react-router-dom';
import { WELCOME_ROUTE } from '../../../constants/routes';

const Home = () => (
  <div>
    <h2>Home</h2>
    <Link to={WELCOME_ROUTE}>Welcome</Link>
  </div>
);

export default Home;
