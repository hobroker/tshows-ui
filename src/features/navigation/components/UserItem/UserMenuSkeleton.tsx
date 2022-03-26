import * as React from 'react';
import { Skeleton } from '@mui/material';

const UserMenuSkeleton = () => (
  <Skeleton
    variant="text"
    height={36}
    sx={{ transform: 'initial', marginTop: 1 }}
  />
);

export default UserMenuSkeleton;
