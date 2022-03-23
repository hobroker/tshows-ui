import { Link } from 'react-router-dom';
import { LinkProps as ReactLinkProps } from 'react-router-dom/index.d';
import { forwardRef } from 'react';

type Props = Omit<ReactLinkProps, 'to'> & { href: ReactLinkProps['to'] };

const LinkBehavior = forwardRef<any, Props>(({ href, ...rest }, ref) => (
  <Link ref={ref} to={href} {...rest} />
));

export default LinkBehavior;
