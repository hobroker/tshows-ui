import { createContext, ReactNode } from 'react';
import { FullShow, useFullShowQuery } from '../../../generated/graphql';

interface ContextType {
  show?: FullShow;
  loading: boolean;
}

interface Props {
  externalId: number;
  children: ReactNode;
}

const ShowPageContext = createContext<ContextType>({
  show: undefined,
  loading: true,
});

const ShowPageProvider = ({ children, externalId }: Props) => {
  const { data, loading } = useFullShowQuery({ variables: { externalId } });
  const show = data?.fullShow;

  return (
    <ShowPageContext.Provider
      value={{
        show,
        loading,
      }}
    >
      {children}
    </ShowPageContext.Provider>
  );
};

export { ShowPageContext };

export default ShowPageProvider;
