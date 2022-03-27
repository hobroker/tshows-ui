import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const StepContent = ({ children }: Props) => <Box>{children}</Box>;

export default StepContent;
