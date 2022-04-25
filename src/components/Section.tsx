import { PropsWithChildren, ReactNode } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledWrapper = styled(Box)`
  width: 100%;
  margin-block: ${({ theme }) => theme.spacing(2)};
`;

interface Props {
  title: ReactNode;
  icon?: ReactNode;
  divider?: boolean;
}

const Section = ({
  title,
  icon,
  divider,
  children,
}: PropsWithChildren<Props>) => (
  <StyledWrapper>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
    </Box>
    {divider && <Divider sx={{ my: 1 }} />}
    {children}
  </StyledWrapper>
);

export default Section;
