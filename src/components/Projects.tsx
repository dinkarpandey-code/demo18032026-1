import { Project } from '../types';
import './Projects.css';

interface ProjectsProps {
  projects: Project[];
  filter: string;
  onFilterChange: (filter: string) => void;
}

function Projects({ projects, filter, onFilterChange }: ProjectsProps) {
  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => onFilterChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {filtered.map((project) => (
          <article key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
