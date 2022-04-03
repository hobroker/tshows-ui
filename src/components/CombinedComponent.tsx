import { FC, PropsWithChildren } from 'react';
import { combineComponents } from '../utils/react';

interface Props {
  components: FC[];
}

const CombinedComponent = ({
  components,
  children,
}: PropsWithChildren<Props>) => {
  const Component = combineComponents(...components);

  return <Component>{children}</Component>;
};

export default CombinedComponent;
