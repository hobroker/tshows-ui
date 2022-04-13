import { styled } from '@mui/material/styles';
import { IconButton, Tooltip } from '@mui/material';
import type { IconButtonProps } from '@mui/material';

interface Props extends IconButtonProps {
  tooltip?: string;
}

const ActionButton = styled(({ tooltip, ...props }: Props) => {
  const button = <IconButton color="primary" {...props} />;

  return tooltip ? <Tooltip title={tooltip}>{button}</Tooltip> : button;
})``;

export default ActionButton;
