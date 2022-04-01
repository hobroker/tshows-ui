import { Route, Routes } from 'react-router-dom';
import Home from '../features/home/components/Home';
import OnboardingPage from '../features/onboarding/components/OnboardingPage';
import LoginPage from '../features/join/components/LoginPage';
import RegisterPage from '../features/join/components/RegisterPage';
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  ONBOARDING_ROUTE,
  REGISTER_ROUTE,
} from '../constants/routes';

const Router = () => (
  <Routes>
    <Route path={HOME_ROUTE} element={<Home />} />
    <Route path={LOGIN_ROUTE} element={<LoginPage />} />
    <Route path={REGISTER_ROUTE} element={<RegisterPage />} />
    <Route path={ONBOARDING_ROUTE} element={<OnboardingPage />} />
  </Routes>
);

export default Router;
