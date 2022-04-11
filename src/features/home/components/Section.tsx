import { PropsWithChildren, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledWrapper = styled(Box)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

interface Props {
  title: string;
  icon: ReactNode;
}

const Section = ({ title, icon, children }: PropsWithChildren<Props>) => (
  <StyledWrapper>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          mr: 0.5,
          color: ({ palette }) => palette.primary.main,
        }}
      >
        {icon}
      </Box>
      <Typography variant="h5">{title}</Typography>
    </Box>
    {children}
  </StyledWrapper>
);

export default Section;
