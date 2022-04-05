import { Route, Routes } from 'react-router-dom';
import HomePage from '../../home/components/HomePage';
import OnboardingPage from '../../onboarding/components/OnboardingPage';
import LoginPage from '../../join/components/LoginPage';
import RegisterPage from '../../join/components/RegisterPage';
import { RoutePath } from '../constants';
import PrivateOutlet from './PrivateOutlet';

const Router = () => (
  <Routes>
    <Route path={RoutePath.Home} element={<HomePage />} />
    <Route path={RoutePath.Login} element={<LoginPage />} />
    <Route path={RoutePath.Register} element={<RegisterPage />} />
    <Route path={RoutePath.Welcome} element={<PrivateOutlet />}>
      <Route path={RoutePath.Welcome} element={<OnboardingPage />} />
    </Route>
  </Routes>
);

export default Router;
