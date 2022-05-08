import React, { useContext } from 'react';
import { UserContext } from '../../../user/contexts/UserContext';
import StatsSummarySection from './StatsSummarySection';

const StatsSummary = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return null;
  }

  return <StatsSummarySection user={user} />;
};

export default StatsSummary;
