import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const EllipsisButton = styled(Button)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  font-weight: bold;
  width: 100%;
`;

export default EllipsisButton;
