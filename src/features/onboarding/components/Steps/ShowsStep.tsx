import ShowsOnboarding from '../ShowsOnboarding';
import ShowsOnboardingProvider from '../../contexts/ShowsOnboardingContext';

const ShowsStep = () => (
  <ShowsOnboardingProvider>
    <ShowsOnboarding />
  </ShowsOnboardingProvider>
);

export default ShowsStep;
