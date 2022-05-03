import type { AvatarProps } from '@mui/material';
import { Avatar } from '@mui/material';

type Props = Omit<AvatarProps, 'src'> & { src?: string | null };

const UserAvatar = ({ imgProps, src, ...rest }: Props) => (
  <Avatar
    imgProps={{ referrerPolicy: 'no-referrer', ...imgProps }}
    src={src || ''}
    {...rest}
  />
);

export default UserAvatar;
