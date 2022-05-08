import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { DynamicRoute } from '../../router/constants';
import { slugifyShow } from '../utils/slugify';
import TallCard from './card/TallCard';

interface Props {
  tallImage?: string | null;
  name: string;
  externalId: number;
}

const TallShowCard = ({ name, tallImage, externalId }: Props) => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate(DynamicRoute.Show(slugifyShow({ externalId, name })));
  }, [externalId, name, navigate]);

  return <TallCard tallImage={tallImage} onClick={onClick} />;
};

export default TallShowCard;
