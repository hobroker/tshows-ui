import { Route, Routes } from 'react-router-dom';
import HomePage from '../../home/components/HomePage';
import OnboardingPage from '../../onboarding/components/OnboardingPage';
import LoginPage from '../../join/components/LoginPage';
import RegisterPage from '../../join/components/RegisterPage';
import { __DynamicRoute, StaticRoute } from '../constants';
import ShowPage from '../../shows/components/ShowPage';
import PrivateOutlet from './PrivateOutlet';

const Router = () => (
  <Routes>
    <Route path={StaticRoute.Home} element={<HomePage />} />
    <Route path={StaticRoute.Login} element={<LoginPage />} />
    <Route path={StaticRoute.Register} element={<RegisterPage />} />
    <Route path={StaticRoute.Welcome} element={<PrivateOutlet />}>
      <Route path={StaticRoute.Welcome} element={<OnboardingPage />} />
    </Route>
    <Route path={__DynamicRoute.Show} element={<ShowPage />} />
  </Routes>
);

export default Router;
