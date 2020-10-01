import React from 'react';

import { action } from '@storybook/addon-actions';

import StyledButton from './StyledButton';

export default {
    title: 'Material/Components/Inputs/Styled Button',
  };

export const Default = () => (
  <StyledButton onClick={action('Styled button clicked')}>
    Styled Button
  </StyledButton>
);