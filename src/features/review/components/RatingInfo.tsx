import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import React from 'react';
import { Sx } from '../../../utils/types';

interface Props {
  variant: TypographyProps['variant'];
  value: number;
  sx?: Sx;
}

const RatingInfo = ({ variant, value, sx }: Props) => (
  <Typography
    variant={variant}
    color={({ components }) =>
      components?.MuiRating?.styleOverrides?.iconFilled as string
    }
    sx={{
      display: 'flex',
      alignItems: 'center',
      fontWeight: 'bold',
      ...sx,
    }}
  >
    <span>{value}</span>
    <StarIcon />
  </Typography>
);

export default RatingInfo;
