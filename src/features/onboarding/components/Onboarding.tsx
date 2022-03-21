import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../../counter/components/Counter';

const Onboarding = () => (
  <div>
    <h2>Onboarding</h2>
    <Counter />
    <Link to="/">Home</Link>
  </div>
);

export default Onboarding;
