import { Routes, Route } from 'react-router-dom';
import Home from '../features/home/components/Home';
import Onboarding from '../features/onboarding/components/Onboarding';
import LoginPage from '../features/join/components/LoginPage';
import RegisterPage from '../features/join/components/RegisterPage';

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/join" element={<RegisterPage />} />
    <Route path="/onboarding" element={<Onboarding />} />
  </Routes>
);

export default Router;
