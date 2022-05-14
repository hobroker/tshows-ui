import { useSnackbar } from 'notistack';
import type { OptionsObject } from 'notistack';
import { useCallback } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const defaultOptions: Partial<OptionsObject> = {
  preventDuplicate: true,
  anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
};

const CloseStackbarButton = () => {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton
      aria-label="close"
      color="inherit"
      sx={{ p: 0.5 }}
      onClick={() => closeSnackbar()}
    >
      <CloseIcon />
    </IconButton>
  );
};

const useAlert = () => {
  const { enqueueSnackbar } = useSnackbar();

  const notifyError = useCallback(
    (message: string, options: OptionsObject = {}) =>
      enqueueSnackbar(message, {
        action: <CloseStackbarButton />,
        ...defaultOptions,
        ...options,
        variant: 'error',
      }),
    [enqueueSnackbar],
  );

  const notifyInfo = useCallback(
    (message: string, options: OptionsObject = {}) =>
      enqueueSnackbar(message, {
        action: <CloseStackbarButton />,
        ...defaultOptions,
        ...options,
        variant: 'info',
      }),
    [enqueueSnackbar],
  );

  return { notifyError, notifyInfo };
};

export default useAlert;
