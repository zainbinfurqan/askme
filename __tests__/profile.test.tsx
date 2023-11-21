import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from '../src/app/profile/page';

test('renders a button with the provided label', () => {
  render(<Profile/>);
    expect(screen.getByTestId('name').textContent).toBe('Sarah Smith')
  });