import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useListUpcomingLazyQuery } from '../../../../../generated/graphql';
import { UserContext } from '../../../../user/contexts/UserContext';
import { UserState } from '../../../../user/constants';
import { EpisodeWithLoading } from '../../../../shows/features/episode/types';

interface ContextType {
  episodes: EpisodeWithLoading[];
  loading: boolean;
}

interface Props {
  children: ReactNode;
}

const UpcomingContext = createContext<ContextType>({
  episodes: [],
  loading: false,
});
const UpcomingProvider = ({ children }: Props) => {
  const { userState } = useContext(UserContext);
  const [fetchUpcomingEpisodes, { loading }] = useListUpcomingLazyQuery({
    fetchPolicy: 'network-only',
  });
  const [episodes, setEpisodes] = useState<EpisodeWithLoading[]>([]);

  useEffect(() => {
    if (userState !== UserState.LoggedIn) {
      return;
    }

    fetchUpcomingEpisodes().then(({ data }) => {
      if (data?.listUpcoming) {
        setEpisodes(data.listUpcoming);
      }
    });
  }, [fetchUpcomingEpisodes, userState]);

  return (
    <UpcomingContext.Provider
      value={{
        episodes,
        loading,
      }}
    >
      {children}
    </UpcomingContext.Provider>
  );
};

export { UpcomingContext };

export default UpcomingProvider;
