import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import React, { Fragment, useContext } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { ReviewContext } from '../contexts/ReviewContext';
import { UserContext } from '../../user/contexts/UserContext';
import UserAvatar from '../../user/components/UserAvatar';
import RatingInfo from './RatingInfo';

interface Props {
  toggleIsFormOpen: () => void;
}

const ReviewsList = ({ toggleIsFormOpen }: Props) => {
  const { reviews } = useContext(ReviewContext);
  const { user } = useContext(UserContext);

  if (!reviews.length) {
    return null;
  }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {reviews.map((review, idx) => {
        const isOwnReview = user?.id === review.user.id;

        return (
          <Fragment key={review.id}>
            <ListItem
              sx={isOwnReview ? { backgroundColor: 'primary.50' } : {}}
              secondaryAction={
                isOwnReview && (
                  <IconButton edge="end" onClick={toggleIsFormOpen}>
                    <EditIcon />
                  </IconButton>
                )
              }
            >
              <ListItemAvatar>
                <UserAvatar src={review.user.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box
                    component="span"
                    sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                  >
                    <RatingInfo value={review.rating} variant="body1" />
                    {review.title}
                  </Box>
                }
                secondary={review.content}
              />
            </ListItem>
            {!isOwnReview && idx !== reviews.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </Fragment>
        );
      })}
    </List>
  );
};

export default ReviewsList;
