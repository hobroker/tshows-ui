import { styled } from '@mui/material/styles';
import { useMemo } from 'react';
import {
  makeTallMdImage,
  makeTallSmImage,
  makeWideMdImage,
  makeWideSmImage,
} from '../utils/image';

interface Props {
  path?: string | null;
  type?: 'wide' | 'tall';
  size?: 'small' | 'medium';
}

const CustomImage = styled(
  ({ path, size = 'small', type = 'tall', ...rest }: Props) => {
    const src = useMemo(() => {
      if (!path) {
        return '';
      }

      if (type === 'wide') {
        if (size === 'small') return makeWideSmImage(path);
        if (size === 'medium') return makeWideMdImage(path);
      }

      if (type === 'tall') {
        if (size === 'small') return makeTallSmImage(path);
        if (size === 'medium') return makeTallMdImage(path);
      }

      return '';
    }, [path, size, type]);

    return <img src={src} alt="" {...rest} />;
  },
)`
  aspect-ratio: ${({ type }) => (type === 'wide' ? '3/2' : '2/3')};
  object-fit: cover;
`;

export default CustomImage;
