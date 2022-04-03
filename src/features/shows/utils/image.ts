import { compose, concat } from 'rambda';

const IMAGE_URL = 'https://image.tmdb.org/t/p';

enum TallImageSizes {
  w92 = 'w92',
  w154 = 'w154',
  w185 = 'w185',
  w342 = 'w342',
  w500 = 'w500',
  w780 = 'w780',
  original = 'original',
}

const makeImageUrl = compose(concat, concat(IMAGE_URL), concat('/'));

export const makeTallSmallImage = makeImageUrl(TallImageSizes.w185);
