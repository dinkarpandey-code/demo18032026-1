import { Experience as ExperienceType } from '../types';
import './Experience.css';

interface ExperienceProps {
  experience: ExperienceType[];
}

function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span className="timeline-date">{exp.startDate} — {exp.endDate}</span>
              <ul>
                {exp.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
