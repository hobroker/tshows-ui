import { useEffect } from 'react';

const useOnMount = (callback: () => void, deps: [] = []) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, [...deps]);
};

export default useOnMount;
