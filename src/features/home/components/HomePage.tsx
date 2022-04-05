import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../router/constants';
import PageWrapper from '../../../components/PageWrapper';
import UpNext from '../../watchlist/components/UpNext';

const HomePage = () => (
  <PageWrapper>
    <h2>Home</h2>
    <Link to={RoutePath.Welcome}>Welcome</Link>
    <UpNext />
  </PageWrapper>
);

export default HomePage;
