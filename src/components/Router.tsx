import { Routes, Route } from 'react-router-dom';
import Home from '../features/home/components/Home';
import OnboardingPage from '../features/onboarding/components/OnboardingPage';
import LoginPage from '../features/join/components/LoginPage';
import RegisterPage from '../features/join/components/RegisterPage';

export const ROUTES = {
  HOME: '/',
  ONBOARDING: '/onboarding',
  LOGIN: '/login',
  REGISTER: '/join',
};

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/join" element={<RegisterPage />} />
    <Route path="/onboarding" element={<OnboardingPage />} />
  </Routes>
);

export default Router;
