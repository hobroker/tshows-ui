import slugify from 'slugify';
import { Show } from '../../../generated/graphql';

export const slugifyShow = (show: Pick<Show, 'externalId' | 'name'>): string =>
  slugify(`${show.externalId} - ${show.name}`, { lower: true });

export const deslugifyShow = (slug?: string) => Number(slug?.split('-')?.[0]);
