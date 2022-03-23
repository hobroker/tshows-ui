import { Routes, Route } from 'react-router-dom';
import Home from '../../home/components/Home';
import Onboarding from '../../onboarding/components/Onboarding';
import Login from '../../login/components/Login';

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/onboarding" element={<Onboarding />} />
  </Routes>
);

export default Router;
