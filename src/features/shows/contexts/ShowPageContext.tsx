import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { FullShow, useFullShowQuery } from '../../../generated/graphql';
import { noop } from '../../../utils/fp';

interface ContextType {
  show?: FullShow;
  loading: boolean;
  update: (data: Partial<FullShow>) => void;
}

interface Props {
  externalId: number;
  children: ReactNode;
}

const ShowPageContext = createContext<ContextType>({
  show: undefined,
  loading: true,
  update: noop,
});

const ShowPageProvider = ({ children, externalId }: Props) => {
  const { data, loading } = useFullShowQuery({ variables: { externalId } });
  const [show, setShow] = useState<FullShow>();

  const update = useCallback(
    (data: Partial<FullShow>) => {
      if (!show) {
        return;
      }

      setShow({ ...show, ...data });
    },
    [show],
  );

  useEffect(() => {
    console.log('data', data);
    if (data?.fullShow) {
      setShow(data.fullShow);
    }
  }, [data]);

  return (
    <ShowPageContext.Provider
      value={{
        show,
        loading,
        update,
      }}
    >
      {children}
    </ShowPageContext.Provider>
  );
};

export { ShowPageContext };

export default ShowPageProvider;
