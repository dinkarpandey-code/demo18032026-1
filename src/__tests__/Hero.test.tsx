import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../components/Hero';

const mockBio = {
  name: 'Test User',
  title: 'Test Title',
  photo: 'https://example.com/photo.jpg',
  summary: 'Test summary text',
};

describe('Hero', () => {
  it('renders bio name', () => {
    render(<Hero bio={mockBio} />);
    expect(screen.getByText('Test User')).toBeInTheDocument();
  });

  it('renders bio title', () => {
    render(<Hero bio={mockBio} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders bio summary', () => {
    render(<Hero bio={mockBio} />);
    expect(screen.getByText('Test summary text')).toBeInTheDocument();
  });

  it('renders photo with correct alt text', () => {
    render(<Hero bio={mockBio} />);
    const img = screen.getByAltText('Test User');
    expect(img).toHaveAttribute('src', 'https://example.com/photo.jpg');
  });
});
