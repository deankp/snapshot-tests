import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text jordan1', () => {
  render(<App />)
  const nameElement = screen.getByText(/Jordan 1/i)
  expect(nameElement).toBeInTheDocument()
});
