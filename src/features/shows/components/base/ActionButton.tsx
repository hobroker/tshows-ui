import { styled } from '@mui/material/styles';
import { IconButton, Tooltip } from '@mui/material';
import type { IconButtonProps } from '@mui/material';

interface Props extends IconButtonProps {
  tooltip?: string;
}

const ActionButton = styled(({ tooltip, ...props }: Props) => {
  const button = <IconButton color="primary" {...props} />;

  return tooltip ? <Tooltip title={tooltip}>{button}</Tooltip> : button;
})`
  filter: drop-shadow(0 0 5px rgba(255 255 255 / 0.7));
`;

export default ActionButton;
