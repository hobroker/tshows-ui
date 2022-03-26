import React, { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { dec, inc, prop } from 'rambda';
import { useMeLazyQuery } from '../../../generated/graphql';

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementAction = () => setCount(inc);
  const decrementAction = () => setCount(dec);

  const [fetchMe] = useMeLazyQuery();

  const test = async () => {
    console.log(await fetchMe().then(prop('data')));
  };

  return (
    <div>
      <ButtonGroup variant="contained">
        <Button onClick={decrementAction} endIcon={<RemoveIcon />}>
          Decrement
        </Button>
        <Button variant="outlined" onClick={test}>
          {count}
        </Button>
        <Button onClick={incrementAction} endIcon={<AddIcon />}>
          Increment
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
