import { PortfolioData } from '../types';

const portfolioData: PortfolioData = {
  bio: {
    name: 'Jane Developer',
    title: 'Full-Stack Software Engineer',
    photo: 'https://i.pravatar.cc/200?img=47',
    summary:
      'Passionate software engineer with 8+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful solutions.',
  },
  skills: [
    { category: 'Frontend', items: [{ name: 'React', level: 90 }, { name: 'TypeScript', level: 85 }, { name: 'CSS/Tailwind', level: 80 }] },
    { category: 'Backend', items: [{ name: 'Node.js', level: 85 }, { name: 'Python', level: 75 }, { name: 'PostgreSQL', level: 70 }] },
    { category: 'DevOps', items: [{ name: 'AWS', level: 80 }, { name: 'Docker', level: 75 }, { name: 'CI/CD', level: 85 }] },
  ],
  projects: [
    { id: '1', title: 'E-Commerce Platform', description: 'A full-stack e-commerce platform with React, Node.js, and Stripe integration.', tags: ['React', 'Node.js', 'Stripe'], category: 'Web App', githubUrl: 'https://github.com/janedev/ecommerce', liveUrl: 'https://shop.example.com' },
    { id: '2', title: 'Task Manager CLI', description: 'A command-line task manager built with Python, featuring calendar sync.', tags: ['Python', 'Click', 'SQLite'], category: 'CLI Tool', githubUrl: 'https://github.com/janedev/taskmgr' },
    { id: '3', title: 'Weather Dashboard', description: 'Real-time weather dashboard using OpenWeather API and D3 visualizations.', tags: ['React', 'D3.js', 'API'], category: 'Web App', githubUrl: 'https://github.com/janedev/weather', liveUrl: 'https://weather.example.com' },
    { id: '4', title: 'DevOps Pipeline', description: 'Automated CI/CD pipeline templates for AWS deployments.', tags: ['AWS', 'Docker', 'GitHub Actions'], category: 'DevOps', githubUrl: 'https://github.com/janedev/devops-pipeline' },
  ],
  experience: [
    { company: 'TechCorp Inc.', role: 'Senior Software Engineer', startDate: 'Jan 2022', endDate: 'Present', achievements: ['Led migration from monolith to microservices (40% latency reduction)', 'Mentored team of 5 junior developers', 'Designed and implemented real-time notification system'] },
    { company: 'StartupXYZ', role: 'Full-Stack Developer', startDate: 'Mar 2019', endDate: 'Dec 2021', achievements: ['Built customer-facing dashboard from scratch (React + GraphQL)', 'Reduced page load time by 60% through code splitting and lazy loading', 'Implemented automated testing pipeline achieving 95% coverage'] },
    { company: 'Digital Agency Co.', role: 'Frontend Developer', startDate: 'Jun 2017', endDate: 'Feb 2019', achievements: ['Developed responsive websites for 20+ clients', 'Introduced component library that reduced development time by 30%'] },
  ],
  contact: {
    email: 'jane@example.com',
    linkedin: 'https://linkedin.com/in/janedev',
    github: 'https://github.com/janedev',
  },
};

export default portfolioData;
