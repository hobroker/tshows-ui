import { Box, Container, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import React, { useContext } from 'react';
import { makeTallMdImage, makeWideLgImage } from '../../utils/image';
import { ShowPageContext } from '../../contexts/ShowPageContext';
import GenresList from './GenresList';
import ShowTitle from './ShowTitle';
import ShowSubtitle from './ShowSubtitle';

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
  grid-template-columns: 1fr 2fr;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: center;

  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-template-columns: 1fr 3fr;
  }
`;

const TallImage = styled('img')`
  width: 100%;
`;

const ShowHeroCard = () => {
  const { show } = useContext(ShowPageContext);

  return (
    <Wrapper
      sx={{
        backgroundImage: `url(${makeWideLgImage(show?.wideImage || '')})`,
        paddingBlock: {
          sm: 4,
          md: 6,
          lg: 8,
        },
      }}
    >
      <Content>
        <Box>
          <TallImage
            src={makeTallMdImage(show?.tallImage || '')}
            alt={show?.name}
          />
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
            {show?.description}
          </Typography>
        </Box>
      </Content>
    </Wrapper>
  );
};

export default ShowHeroCard;
