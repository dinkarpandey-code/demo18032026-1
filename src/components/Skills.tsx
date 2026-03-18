import { SkillCategory } from '../types';
import './Skills.css';

interface SkillsProps {
  skills: SkillCategory[];
}

function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((cat) => (
          <div key={cat.category} className="skill-category">
            <h3>{cat.category}</h3>
            <ul>
              {cat.items.map((skill) => (
                <li key={skill.name} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: `${skill.level}%` }}
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} proficiency ${skill.level}%`}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
