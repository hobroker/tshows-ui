import { Routes, Route } from 'react-router-dom';
import Home from '../../home/components/Home';
import Onboarding from '../../onboarding/components/Onboarding';

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="onboarding" element={<Onboarding />} />
  </Routes>
);

export default Router;
