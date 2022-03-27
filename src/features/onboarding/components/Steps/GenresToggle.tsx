import React, { useState } from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  marginRight: 8,
  border: `1px solid ${theme.palette.grey[300]}`,
}));

const GenresToggle = () => {
  const [formats, setFormats] = useState(() => ['bold', 'italic']);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      sx={{ flexWrap: 'wrap' }}
    >
      <StyledToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </StyledToggleButton>
      <StyledToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </StyledToggleButton>
      <StyledToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </StyledToggleButton>
      <StyledToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </StyledToggleButton>
      <StyledToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </StyledToggleButton>
      <StyledToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </StyledToggleButton>
      <StyledToggleButton value="underlined" aria-label="underlined">
        <FormatUnderlinedIcon />
      </StyledToggleButton>
      <StyledToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </StyledToggleButton>
      <StyledToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </StyledToggleButton>
      <StyledToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </StyledToggleButton>
      <StyledToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </StyledToggleButton>
      <StyledToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </StyledToggleButton>
      <StyledToggleButton value="underlined" aria-label="underlined">
        <FormatUnderlinedIcon />
      </StyledToggleButton>
      <StyledToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </StyledToggleButton>
      <StyledToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </StyledToggleButton>
      <StyledToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </StyledToggleButton>
      <StyledToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </StyledToggleButton>
      <StyledToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </StyledToggleButton>
      <StyledToggleButton value="underlined" aria-label="underlined">
        <FormatUnderlinedIcon />
      </StyledToggleButton>
      <StyledToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </StyledToggleButton>
      <StyledToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </StyledToggleButton>
      <StyledToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </StyledToggleButton>
      <StyledToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </StyledToggleButton>
      <StyledToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </StyledToggleButton>
      <StyledToggleButton value="underlined" aria-label="underlined">
        <FormatUnderlinedIcon />
      </StyledToggleButton>
      <StyledToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </StyledToggleButton>
      <StyledToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </StyledToggleButton>
      <StyledToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </StyledToggleButton>
      <StyledToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </StyledToggleButton>
      <StyledToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </StyledToggleButton>
      <StyledToggleButton value="underlined" aria-label="underlined">
        <FormatUnderlinedIcon />
      </StyledToggleButton>
    </ToggleButtonGroup>
  );
};

export default GenresToggle;
