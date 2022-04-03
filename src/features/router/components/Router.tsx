import { Route, Routes } from 'react-router-dom';
import Home from '../../home/components/Home';
import OnboardingPage from '../../onboarding/components/OnboardingPage';
import LoginPage from '../../join/components/LoginPage';
import RegisterPage from '../../join/components/RegisterPage';
import { RoutePath } from '../constants';
import PrivateOutlet from './PrivateOutlet';

const Router = () => (
  <Routes>
    <Route path={RoutePath.Home} element={<Home />} />
    <Route path={RoutePath.Login} element={<LoginPage />} />
    <Route path={RoutePath.Register} element={<RegisterPage />} />
    <Route path={RoutePath.Welcome} element={<PrivateOutlet />}>
      <Route path={RoutePath.Welcome} element={<OnboardingPage />} />
    </Route>
  </Routes>
);

export default Router;
