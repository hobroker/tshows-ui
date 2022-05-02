import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import React, { useContext } from 'react';
import { pick } from 'ramda';
import useYupValidationResolver from '../../join/hooks/useYupValidationResolver';
import { ReviewContext } from '../contexts/ReviewContext';
import ShowRating from './ShowRating';

type Input = {
  title: string;
  content: string;
};

const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  content: yup.string().required('Content is required'),
});

interface Props {
  toggleIsFormOpen: () => void;
}

const ReviewForm = ({ toggleIsFormOpen }: Props) => {
  const { ownReview, upsertReview } = useContext(ReviewContext);
  const defaultValues = ownReview && pick(['title', 'content'], ownReview);
  const resolver = useYupValidationResolver(validationSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ resolver, defaultValues });
  const onSubmit = handleSubmit((data) => {
    const { title, content } = data;

    upsertReview({ title, content });
    toggleIsFormOpen();
  });
  const isExistingReview = !!defaultValues;

  return (
    <form onSubmit={onSubmit}>
      <Stack sx={{ gap: 2 }}>
        <Box sx={{ display: 'flex' }}>
          <Typography variant="h6">
            {isExistingReview ? 'Update' : 'Add'} review
          </Typography>
          <Box sx={{ ml: 'auto' }}>
            <ShowRating />
          </Box>
        </Box>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          size="small"
          error={!!errors.title}
          helperText={errors.title?.message}
          {...register('title')}
        />
        <TextField
          label="Content"
          variant="outlined"
          fullWidth
          multiline
          rows={2}
          size="small"
          error={!!errors.content}
          helperText={errors.content?.message}
          {...register('content')}
        />
        <Box sx={{ display: 'flex', ml: 'auto', gap: 1 }}>
          {isExistingReview && (
            <Button
              type="submit"
              variant="outlined"
              color="info"
              onClick={toggleIsFormOpen}
            >
              Cancel
            </Button>
          )}
          <Button type="submit" variant="contained">
            {isExistingReview ? 'Update' : 'Create'}
          </Button>
        </Box>
      </Stack>
    </form>
  );
};

export default ReviewForm;
