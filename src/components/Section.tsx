import { PropsWithChildren, ReactNode } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Sx } from '../utils/types';

const StyledWrapper = styled(Box)`
  width: 100%;
  margin-block: ${({ theme }) => theme.spacing(2)};
`;

interface Props {
  title: ReactNode;
  icon?: ReactNode;
  afterTitle?: ReactNode;
  divider?: boolean;
  sx?: Sx;
}

const Section = ({
  title,
  icon,
  afterTitle,
  divider,
  children,
  sx,
}: PropsWithChildren<Props>) => (
  <StyledWrapper sx={sx}>
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      {icon && (
        <Box
          sx={{
            display: 'flex',
            mr: 0.5,
            color: ({ palette }) => palette.primary.main,
          }}
        >
          {icon}
        </Box>
      )}
      <Typography variant="h5">{title}</Typography>
      {afterTitle}
    </Box>
    {divider && <Divider sx={{ my: 1 }} />}
    {children}
  </StyledWrapper>
);

export default Section;
