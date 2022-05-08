import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { ListItemButton, ListItemText, Typography } from '@mui/material';
import { DynamicRoute } from '../../router/constants';
import { slugifyShow } from '../../shows/utils/slugify';
import CustomImage from '../../shows/components/CustomImage';

const Text = styled(Typography)`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
`;

interface Props {
  externalId: number;
  name: string;
  description: string;
  wideImage?: string | null;
}

const ListItemSearchResult = ({
  wideImage,
  externalId,
  name,
  description,
}: Props) => {
  const navigate = useNavigate();
  const href = DynamicRoute.Show(slugifyShow({ externalId, name }));
  const onClick = useCallback(() => navigate(href), [href, navigate]);

  return (
    <ListItemButton
      sx={{ height: 75, display: 'flex', alignItems: 'flex-start', gap: 1 }}
      onClick={onClick}
    >
      <CustomImage path={wideImage} type="wide" sx={{ height: '100%' }} />
      <ListItemText>
        <Text variant="body2">
          <span style={{ fontWeight: 'bold' }}>{name}</span>
          {' - '} {description}
        </Text>
      </ListItemText>
    </ListItemButton>
  );
};

export default ListItemSearchResult;
