import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Contact from '../components/Contact';

const mockContact = { email: 'test@test.com', linkedin: 'https://linkedin.com', github: 'https://github.com' };

describe('Contact', () => {
  it('renders section title', () => {
    render(<Contact contactInfo={mockContact} />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders contact links', () => {
    render(<Contact contactInfo={mockContact} />);
    expect(screen.getByText('test@test.com')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('renders form fields', () => {
    render(<Contact contactInfo={mockContact} />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Subject')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('shows validation errors on empty submit', async () => {
    const user = userEvent.setup();
    render(<Contact contactInfo={mockContact} />);
    await user.click(screen.getByText('Send Message'));
    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Subject is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
  });

  it('shows email format error', async () => {
    const user = userEvent.setup();
    render(<Contact contactInfo={mockContact} />);
    await user.type(screen.getByLabelText('Email'), 'invalid');
    await user.click(screen.getByText('Send Message'));
    expect(screen.getByText('Invalid email format')).toBeInTheDocument();
  });

  it('shows success message on valid submit', async () => {
    const user = userEvent.setup();
    render(<Contact contactInfo={mockContact} />);
    await user.type(screen.getByLabelText('Name'), 'Test');
    await user.type(screen.getByLabelText('Email'), 'test@test.com');
    await user.type(screen.getByLabelText('Subject'), 'Hello');
    await user.type(screen.getByLabelText('Message'), 'World');
    await user.click(screen.getByText('Send Message'));
    expect(screen.getByText(/Thank you for your message/)).toBeInTheDocument();
  });
});
