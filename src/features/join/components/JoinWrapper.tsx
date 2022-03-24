import React, { ReactNode } from 'react';
import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import LogoIcon from '../../logo/components/LogoIcon';
import SignInWithGoogleButton from '../features/google/components/SignInWithGoogleButton';

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Row = styled(Box)`
  display: flex;
  justify-content: center;
`;

interface Props {
  title: string;
  children: ReactNode;
}

const JoinWrapper = ({ title, children }: Props) => (
  <Wrapper>
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
          <SignInWithGoogleButton />
        </Row>
        <Divider>OR</Divider>
        <Row marginBottom={3} />
        {children}
      </CardContent>
    </Card>
  </Wrapper>
);

export default JoinWrapper;
