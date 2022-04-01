import React, { ReactNode, useState } from 'react';
import {
  Backdrop,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { not } from 'rambda';
import LogoIcon from '../../logo/components/LogoIcon';
import SignInWithGoogleButton from '../features/google/components/SignInWithGoogleButton';
import PageWrapper from '../../../components/PageWrapper';

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Row = styled(Box)`
  display: flex;
  justify-content: center;
`;

interface Props {
  title: string;
  children: ReactNode;
}

const JoinWrapper = ({ title, children }: Props) => {
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);
  const toggleBackdrop = () => setIsBackdropOpen(not);

  return (
    <PageWrapper>
      <Wrapper>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.appBar + 1 }}
          open={isBackdropOpen}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Card elevation={8} sx={{ width: 600 }}>
          <CardContent>
            <Row marginBottom={3}>
              <LogoIcon width={50} />
            </Row>
            <Row marginBottom={3}>
              <Typography align="center" variant="h4">
                {title}
              </Typography>
            </Row>
            <Row marginBottom={3}>
              <SignInWithGoogleButton toggleBackdrop={toggleBackdrop} />
            </Row>
            <Divider>OR</Divider>
            <Row marginBottom={3} />
            {children}
          </CardContent>
        </Card>
      </Wrapper>
    </PageWrapper>
  );
};

export default JoinWrapper;
