import React, { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { dec, inc } from 'rambda';

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementAction = () => setCount(inc);
  const decrementAction = () => setCount(dec);

  return (
    <div>
      <ButtonGroup variant="contained">
        <Button onClick={decrementAction} endIcon={<RemoveIcon />}>
          Decrement
        </Button>
        <Button disabled>{count}</Button>
        <Button onClick={incrementAction} endIcon={<AddIcon />}>
          Increment
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
