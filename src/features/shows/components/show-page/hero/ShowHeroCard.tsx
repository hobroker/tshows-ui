import { Box, Container, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import React, { useContext } from 'react';
import { makeWideLgImage } from '../../../utils/image';
import { ShowPageContext } from '../../../contexts/ShowPageContext';
import WhenLoggedIn from '../../../../user/components/WhenLoggedIn';
import CustomImage from '../../CustomImage';
import GenresList from './GenresList';
import ShowTitle from './ShowTitle';
import ShowSubtitle from './ShowSubtitle';
import WatchlistActionButton from './WatchlistActionButton';

const Wrapper = styled('div')`
  width: 100%;
  position: relative;
  background-size: cover;
  min-height: 50vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => alpha(theme.palette.common.black, 0.85)};
  }
`;

const Content = styled(Container)`
  position: relative;
  width: 100%;
  display: grid;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: center;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    grid-template-columns: minmax(200px, 1fr) 3fr;
  }
`;

const TallImage = styled(CustomImage)`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  width: 100%;
`;

const ShowHeroCard = () => {
  const { show } = useContext(ShowPageContext);

  return (
    <Wrapper
      sx={{
        backgroundImage: `url(${makeWideLgImage(show.wideImage || '')})`,
        paddingBlock: {
          sm: 4,
          md: 6,
          lg: 8,
        },
      }}
    >
      <Content>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <TallImage path={show.tallImage} size="medium" />
          <WhenLoggedIn>
            <WatchlistActionButton />
          </WhenLoggedIn>
        </Box>
        <Box
          sx={{
            alignSelf: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%',
          }}
        >
          <ShowTitle />
          <ShowSubtitle />
          <GenresList />
          <Typography variant="body1" color="white">
            {show.description}
          </Typography>
        </Box>
      </Content>
    </Wrapper>
  );
};

export default ShowHeroCard;
