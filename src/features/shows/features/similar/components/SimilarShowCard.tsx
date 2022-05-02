import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import TallCard from '../../../components/card/TallCard';
import { DynamicRoute } from '../../../../router/constants';
import { slugifyShow } from '../../../utils/slugify';

interface Props {
  tallImage: string;
  name: string;
  externalId: number;
}

const SimilarShowCard = ({ name, tallImage, externalId }: Props) => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate(DynamicRoute.Show(slugifyShow({ externalId, name })));
  }, [externalId, name, navigate]);

  return <TallCard tallImage={tallImage} onClick={onClick} />;
};

export default SimilarShowCard;
