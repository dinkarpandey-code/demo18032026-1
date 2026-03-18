import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Experience from '../components/Experience';

const mockExperience = [
  { company: 'ACME Corp', role: 'Senior Dev', startDate: 'Jan 2022', endDate: 'Present', achievements: ['Led team of 5', 'Built API'] },
  { company: 'StartupX', role: 'Developer', startDate: 'Jan 2020', endDate: 'Dec 2021', achievements: ['Built dashboard'] },
];

describe('Experience', () => {
  it('renders section title', () => {
    render(<Experience experience={mockExperience} />);
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('renders company names', () => {
    render(<Experience experience={mockExperience} />);
    expect(screen.getByText('ACME Corp')).toBeInTheDocument();
    expect(screen.getByText('StartupX')).toBeInTheDocument();
  });

  it('renders roles', () => {
    render(<Experience experience={mockExperience} />);
    expect(screen.getByText('Senior Dev')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
  });

  it('renders date ranges', () => {
    render(<Experience experience={mockExperience} />);
    expect(screen.getByText('Jan 2022 — Present')).toBeInTheDocument();
  });

  it('renders achievements', () => {
    render(<Experience experience={mockExperience} />);
    expect(screen.getByText('Led team of 5')).toBeInTheDocument();
    expect(screen.getByText('Built API')).toBeInTheDocument();
  });
});
