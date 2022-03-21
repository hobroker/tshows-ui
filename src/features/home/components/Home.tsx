import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../../counter/components/Counter';

const Home = () => (
  <div>
    <h2>Home</h2>
    <Counter />
    <Link to="/onboarding">Onboarding</Link>
  </div>
);

export default Home;
