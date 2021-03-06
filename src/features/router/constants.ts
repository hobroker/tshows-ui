export enum StaticRoute {
  Home = '/',
  Welcome = '/welcome',
  Login = '/login',
  Register = '/join',
  MyShows = '/my-shows',
  Trending = '/trending',
  Statistics = '/statistics',
}

export enum __DynamicRoute {
  Show = '/show/:slug',
}

export const DynamicRoute = {
  Show: (id: string | number) =>
    __DynamicRoute.Show.replace(':slug', id.toString()),
};
