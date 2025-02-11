import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Ankit book Shop', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ankit book Shop/i);
  expect(linkElement).toBeInTheDocument();
});
