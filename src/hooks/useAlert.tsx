import { useSnackbar } from 'notistack';
import type { OptionsObject } from 'notistack';

const defaultOptions: Partial<OptionsObject> = {
  preventDuplicate: true,
  anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
};

const useAlert = () => {
  const { enqueueSnackbar } = useSnackbar();

  const notifyError = (message: string) =>
    enqueueSnackbar(message, {
      ...defaultOptions,
      variant: 'error',
    });

  return { notifyError };
};

export default useAlert;
