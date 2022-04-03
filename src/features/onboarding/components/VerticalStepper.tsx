import React, {
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  Box,
  Button,
  Paper,
  Step,
  StepButton,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { dec, inc } from 'rambda';
import { LoadingButton } from '@mui/lab';
import LogoText from '../../logo/components/LogoText';
import { PreferencesContext } from '../../user/contexts/PreferencesContext';
import WelcomeStep from './Steps/WelcomeStep';
import ProfileStep from './Steps/ProfileStep';
import GenresStep from './Steps/GenresStep';
import ShowsStep from './Steps/ShowsStep';

interface StepType {
  label: string;
  title: ReactNode;
  content: ReactNode;
  onContinue?: () => void;
}

const VerticalStepper = () => {
  const { savePreferences } = useContext(PreferencesContext);
  const [activeStep, setActiveStep] = useState(3);
  const [loading, setLoading] = useState(false);
  const handleNext = () => setActiveStep(inc);

  const saveGenrePrefences = useCallback(async () => {
    setLoading(true);
    await savePreferences();
    setLoading(false);

    handleNext();
  }, [savePreferences]);

  const steps = useMemo<StepType[]>(
    () => [
      {
        label: 'Welcome',
        title: (
          <Box sx={{ display: 'flex' }}>
            Welcome to
            <Box py={1} ml={0.5}>
              <LogoText sx={{ height: 16 }} />
            </Box>
          </Box>
        ),
        content: <WelcomeStep />,
      },
      {
        label: 'Profile',
        title: "Let's personalize your profile",
        content: <ProfileStep />,
      },
      {
        label: 'Genres',
        title: 'Select your favorite genres',
        content: <GenresStep />,
        onContinue: saveGenrePrefences,
      },
      {
        label: 'TV Shows',
        title: 'Add some TV Shows to your profile',
        content: <ShowsStep />,
      },
    ],
    [saveGenrePrefences],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map(({ onContinue, label, title, content }, index) => (
          <Step key={label}>
            <StepButton
              color="inherit"
              onClick={() => setActiveStep(index)}
              disabled={false}
              sx={{ width: 'auto', borderRadius: 1, paddingY: 0, marginY: 1 }}
            >
              {label}
            </StepButton>
            <StepContent>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ marginBottom: 1 }}>
                  {title}
                </Typography>
                {content}
              </Box>
              <Box sx={{ mb: 2 }}>
                <div>
                  <LoadingButton
                    variant="contained"
                    onClick={onContinue || handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    loading={loading}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </LoadingButton>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default VerticalStepper;
