import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';

test('renders counter component', () => {
  render(<Counter />);
  const textElement = screen.getByText(/Counter:/i);
  expect(textElement).toBeInTheDocument();
});
