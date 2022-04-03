import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../router/constants';

const Home = () => (
  <div>
    <h2>Home</h2>
    <Link to={RoutePath.Welcome}>Welcome</Link>
  </div>
);

export default Home;
