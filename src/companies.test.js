import { render, screen } from '@testing-library/react';
import CompanyRegister from './companies';

test('renders CompanyRegister', async () => {
  const rootElement = document.getElementById('root')
  render(<CompanyRegister />, rootElement);
  const linkElement = screen.getByText(/Exchange Symbol/i);
  expect(linkElement).toBeInTheDocument();
});
