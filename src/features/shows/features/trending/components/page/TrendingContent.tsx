import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { TrendingContext } from '../../contexts/TrendingContext';
import Section from '../../../../../../components/Section';
import ShowsCollection from '../../../../components/ShowsCollection';

const TrendingContent = () => {
  const { shows, loading, fetchNextPage } = useContext(TrendingContext);
  const loader = useRef(null);

  const handleObserver = useCallback(
    ([target]) => {
      if (target.isIntersecting && !loading) {
        fetchNextPage();
      }
    },
    [fetchNextPage, loading],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '1px',
      threshold: 0,
    });

    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <Box>
      <Section title="Recommendations" icon={<TrendingUpIcon />}>
        <ShowsCollection
          shows={shows}
          loading={false}
          scroll={false}
          loadingIndicator={loading}
        />
      </Section>
      <div ref={loader} />
    </Box>
  );
};

export default TrendingContent;
