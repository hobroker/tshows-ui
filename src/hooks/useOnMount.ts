import { useEffect } from 'react';

const useOnMount = (callback: () => void, deps: [] = []) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);
};

export default useOnMount;
