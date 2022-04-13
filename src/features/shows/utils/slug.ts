import slugify from 'slugify';
import { PartialShow } from '../../../generated/graphql';

export const slugifyShow = (show: Partial<PartialShow>): string =>
  slugify(`${show.externalId} - ${show.name}`, { lower: true });

export const deslugifyShow = (slug: string | undefined) =>
  Number(slug?.split('-')?.[0]);
