import React, { useContext } from 'react';
import { UserContext } from '../../../user/contexts/UserContext';
import StatsSummaryProvider from '../../contexts/StatsSummaryContext';
import StatsSummarySection from './StatsSummarySection';

const StatsSummary = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return null;
  }

  return (
    <StatsSummaryProvider>
      <StatsSummarySection user={user} />
    </StatsSummaryProvider>
  );
};

export default StatsSummary;
