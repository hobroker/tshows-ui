import { alpha, styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import ShowRating from './ShowRating';

const Wrapper = styled('div')`
  height: 100%;
  background-color: ${alpha('#000', 0.5)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: ${({ theme }) => theme.spacing(2)};
`;

const UserActionsBox = () => (
  <Wrapper>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="body1" color="white" sx={{ fontWeight: 'bold' }}>
        Your rating:
      </Typography>
      <ShowRating />
    </Box>
  </Wrapper>
);

export default UserActionsBox;
