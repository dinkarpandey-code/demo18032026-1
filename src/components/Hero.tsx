import { Bio } from '../types';
import './Hero.css';

interface HeroProps {
  bio: Bio;
}

function Hero({ bio }: HeroProps) {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <img src={bio.photo} alt={bio.name} className="hero-photo" />
        <h1 className="hero-name">{bio.name}</h1>
        <h2 className="hero-title">{bio.title}</h2>
        <p className="hero-summary">{bio.summary}</p>
      </div>
    </section>
  );
}

export default Hero;
