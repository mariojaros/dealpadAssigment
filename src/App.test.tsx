import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from "./layout/Home";

test('renders hello world', () => {
  render(<Home />);
  const element = screen.getByText(/Hello World/i);
  expect(element).toBeInTheDocument();
});
