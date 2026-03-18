import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('renders brand text', () => {
    render(<Navbar dark={false} onToggleTheme={() => {}} />);
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Navbar dark={false} onToggleTheme={() => {}} />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders moon icon in light mode', () => {
    render(<Navbar dark={false} onToggleTheme={() => {}} />);
    expect(screen.getByLabelText('Switch to dark mode')).toBeInTheDocument();
  });

  it('renders sun icon in dark mode', () => {
    render(<Navbar dark={true} onToggleTheme={() => {}} />);
    expect(screen.getByLabelText('Switch to light mode')).toBeInTheDocument();
  });

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup();
    render(<Navbar dark={false} onToggleTheme={() => {}} />);
    const toggle = screen.getByLabelText('Toggle navigation menu');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
  });
});
