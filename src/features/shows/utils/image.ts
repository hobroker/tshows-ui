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

enum WideImageSize {
  w300 = 'w300',
  w780 = 'w780',
  w1280 = 'w1280',
  original = 'original',
}

const makeImageUrl = compose(concat, concat(IMAGE_URL), concat('/'));

export const makeTallSmallImage = makeImageUrl(TallImageSizes.w185);
export const makeWideSmallImage = makeImageUrl(WideImageSize.w300);
