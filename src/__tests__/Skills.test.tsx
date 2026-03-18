import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Skills from '../components/Skills';

const mockSkills = [
  { category: 'Frontend', items: [{ name: 'React', level: 90 }, { name: 'CSS', level: 80 }] },
  { category: 'Backend', items: [{ name: 'Node.js', level: 85 }] },
];

describe('Skills', () => {
  it('renders section title', () => {
    render(<Skills skills={mockSkills} />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('renders skill categories', () => {
    render(<Skills skills={mockSkills} />);
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
  });

  it('renders skill names', () => {
    render(<Skills skills={mockSkills} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('renders progress bars with correct levels', () => {
    render(<Skills skills={mockSkills} />);
    const reactBar = screen.getByLabelText('React proficiency 90%');
    expect(reactBar).toHaveStyle({ width: '90%' });
  });
});
