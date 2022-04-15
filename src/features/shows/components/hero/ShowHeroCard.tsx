import { Box, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { DateTime } from 'luxon';
import { orange } from '@mui/material/colors';
import { useContext } from 'react';
import { makeWideLgImage } from '../../utils/image';
import { ShowPageContext } from '../../contexts/ShowPageContext';
import GenresList from './GenresList';
import UserActionsBox from './UserActionsBox';

const Wrapper = styled('div')`
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: ${({ theme }) => theme.spacing(-0.75)};
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      ${({ theme }) => alpha(theme.palette.common.black, 0.8)},
      ${({ theme }) => alpha(theme.palette.common.black, 0.8)} 20%,
      ${({ theme }) => alpha(theme.palette.common.black, 0)}
    );
  }
`;

const Content = styled('div')`
  position: absolute;
  width: 100%;
  bottom: ${({ theme }) => theme.spacing(0.75)};
  left: 0;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const Image = styled('img')`
  width: 100%;
`;

const ShowHeroCard = () => {
  const { show } = useContext(ShowPageContext);
  const releaseYear = DateTime.fromISO(show?.firstAirDate).toFormat('yyyy');

  return (
    <Wrapper>
      <Image src={makeWideLgImage(show?.wideImage || '')} alt={show?.name} />
      <Content
        sx={{
          px: { xs: 1, sm: 3, lg: 6 },
          py: { xs: 1, sm: 3, lg: 6 },
        }}
      >
        <div className="left">
          <Box sx={{ mb: 1, display: 'flex', alignItems: 'flex-end' }}>
            <Typography variant="h2" color="white" sx={{ fontWeight: 'bold' }}>
              {show?.name}
            </Typography>
            <Typography variant="h5" color="white" sx={{ fontWeight: 'bold' }}>
              ({releaseYear})
            </Typography>
            <Typography
              variant="h3"
              color={orange[500]}
              sx={{
                fontWeight: 'bold',
                marginLeft: 'auto',
                alignSelf: 'center',
              }}
            >
              {/* TODO add rating */}4 / 5
            </Typography>
          </Box>
          <Box sx={{ mb: 1 }}>
            <GenresList />
          </Box>
          <Box sx={{ mb: 1 }}>
            <Typography variant="body1" color="white" sx={{ mt: 1.5 }}>
              {show?.description}
            </Typography>
          </Box>
        </div>
        <div className="right">
          <UserActionsBox />
        </div>
      </Content>
    </Wrapper>
  );
};

export default ShowHeroCard;
