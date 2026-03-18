import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Projects from '../components/Projects';

const mockProjects = [
  { id: '1', title: 'App A', description: 'Description A', tags: ['React', 'Node'], category: 'Web App', githubUrl: 'https://github.com/a', liveUrl: 'https://a.com' },
  { id: '2', title: 'Tool B', description: 'Description B', tags: ['Python'], category: 'CLI Tool', githubUrl: 'https://github.com/b' },
];

describe('Projects', () => {
  it('renders section title', () => {
    render(<Projects projects={mockProjects} filter="All" onFilterChange={() => {}} />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('renders all projects when filter is All', () => {
    render(<Projects projects={mockProjects} filter="All" onFilterChange={() => {}} />);
    expect(screen.getByText('App A')).toBeInTheDocument();
    expect(screen.getByText('Tool B')).toBeInTheDocument();
  });

  it('filters projects by category', () => {
    render(<Projects projects={mockProjects} filter="CLI Tool" onFilterChange={() => {}} />);
    expect(screen.queryByText('App A')).not.toBeInTheDocument();
    expect(screen.getByText('Tool B')).toBeInTheDocument();
  });

  it('renders filter buttons', () => {
    render(<Projects projects={mockProjects} filter="All" onFilterChange={() => {}} />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Web App')).toBeInTheDocument();
    expect(screen.getByText('CLI Tool')).toBeInTheDocument();
  });

  it('shows live demo link only when available', () => {
    render(<Projects projects={mockProjects} filter="All" onFilterChange={() => {}} />);
    const liveLinks = screen.getAllByText('Live Demo');
    expect(liveLinks).toHaveLength(1);
  });

  it('calls onFilterChange when filter button clicked', async () => {
    const user = userEvent.setup();
    let filter = 'All';
    const setFilter = (f: string) => { filter = f; };
    render(<Projects projects={mockProjects} filter="All" onFilterChange={setFilter} />);
    await user.click(screen.getByText('Web App'));
    expect(filter).toBe('Web App');
  });
});
