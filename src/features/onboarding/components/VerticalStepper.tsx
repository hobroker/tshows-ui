import React, { ReactNode, useMemo, useState } from 'react';
import {
  Box,
  Button,
  Step,
  StepButton,
  StepContent,
  Stepper,
  Typography,
} from '@mui/material';
import { inc } from 'rambda';
import { useNavigate } from 'react-router-dom';
import LogoText from '../../logo/components/LogoText';
import { HOME_ROUTE } from '../../../constants/routes';
import WelcomeStep from './Steps/WelcomeStep';
import GenresStep from './Steps/GenresStep';
import ShowsStep from './Steps/ShowsStep';

interface StepType {
  label: string;
  title: ReactNode;
  content: ReactNode;
}

const VerticalStepper = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const steps = useMemo<StepType[]>(
    () => [
      {
        label: 'Welcome',
        title: (
          <Box sx={{ display: 'flex' }}>
            Welcome to
            <LogoText sx={{ height: 32, py: 1, ml: 0.5 }} />
          </Box>
        ),
        content: <WelcomeStep />,
      },
      {
        label: 'Genres',
        title: 'Select your favorite genres',
        content: <GenresStep />,
      },
      {
        label: 'TV Shows',
        title: 'Add some TV Shows to your profile',
        content: <ShowsStep />,
      },
    ],
    [],
  );

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      navigate(HOME_ROUTE);
    } else {
      setActiveStep(inc);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map(({ label, title, content }, index) => (
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
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Next step'}
                  </Button>
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
