import { Routes, Route } from 'react-router-dom';
import Home from '../../home/components/Home';
import Onboarding from '../../onboarding/components/Onboarding';
import LoginPage from '../../join/components/LoginPage';
import RegisterPage from '../../join/components/RegisterPage';

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/join" element={<RegisterPage />} />
    <Route path="/onboarding" element={<Onboarding />} />
  </Routes>
);

export default Router;
