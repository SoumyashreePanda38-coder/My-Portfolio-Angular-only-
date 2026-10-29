import { Achievement } from '../models/achievement.model';
import { Certificate } from '../models/certificate.model';
import { Education } from '../models/education.model';
import { Experience } from '../models/experience.model';
import { Project } from '../models/project.model';
import { Skill } from '../models/skill.model';

export const portfolioData = {
  profile: {
    name: 'Your Name',
    title: 'Full Stack Developer',
    location: 'Your City, Country',
    email: 'you@example.com',
    phone: '+00 000 000 000',
    github: 'https://github.com/yourusername',
    linkedin: 'https://www.linkedin.com/in/yourusername',
  },
  about: {
    intro:
      'I build polished, user-focused digital experiences with a passion for clean architecture, performance, and maintainable code.',
    summary:
      'I am a developer focused on creating practical solutions that blend design quality with technical strength.',
  },
  skills: [
    { name: 'Angular', category: 'Frontend', level: 90, icon: 'angular' },
    { name: 'TypeScript', category: 'Frontend', level: 88, icon: 'typescript' },
    { name: 'Node.js', category: 'Backend', level: 82, icon: 'node' },
    { name: 'JavaScript', category: 'Frontend', level: 86, icon: 'javascript' },
    { name: 'HTML5', category: 'Frontend', level: 92, icon: 'html5' },
    { name: 'CSS3', category: 'Frontend', level: 90, icon: 'css3' },
  ] as Skill[],
  education: [
    {
      school: 'University Name',
      degree: 'B.Sc. in Computer Science',
      period: '2018 - 2022',
      location: 'City, Country',
      description: 'Focused on software engineering, databases, and user-centered products.',
    },
  ] as Education[],
  experience: [
    {
      company: 'Company Name',
      role: 'Frontend Developer',
      period: '2022 - Present',
      location: 'Remote / On-site',
      description: 'Built responsive interfaces and collaborated on product delivery.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
    },
  ] as Experience[],
  projects: [
    {
      id: 1,
      title: 'Portfolio Website',
      slug: 'portfolio-website',
      description: 'A modern portfolio centered on showcasing projects and professional experience.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      image: 'assets/images/projects/portfolio/portfolio.png',
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
    },
  ] as Project[],
  certificates: [
    {
      title: 'Frontend Development',
      issuer: 'Platform Name',
      issueDate: '2024',
      credentialUrl: '#',
      description: 'Certificate covering modern frontend engineering and UI principles.',
    },
  ] as Certificate[],
  achievements: [
    {
      title: 'Team Excellence Award',
      description: 'Recognized for delivering a cross-functional product initiative with measurable impact.',
      date: '2024',
      icon: 'award',
    },
  ] as Achievement[],
};
