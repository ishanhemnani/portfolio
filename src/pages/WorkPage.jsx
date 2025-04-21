import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

const WorkPage = () => {
  // Project data
  const projects = [
    {
      title: '3D Jumper Platform Game',
      description: 'A platform game where you jump between colorful platforms, collect coins, and try to reach new heights. Built with Three.js and Nipple.js.',
      image: '/project-placeholder.jpg',
      technologies: ['Three.js', 'Nipple.js', 'Solana', 'JavaScript'],
      demoLink: 'https://3djumper.fun',
      codeLink: 'https://github.com/username/3djumper',
      featured: true
    },
    {
      title: 'E-commerce Dashboard',
      description: 'A comprehensive dashboard for e-commerce store management with analytics, inventory tracking, and order processing.',
      image: '/project-placeholder.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/username/ecommerce-dashboard'
    },
    {
      title: 'Personal Finance Tracker',
      description: 'A web application to track personal finances, create budgets, and visualize spending patterns.',
      image: '/project-placeholder.jpg',
      technologies: ['React', 'Firebase', 'Chart.js', 'Styled Components'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/username/finance-tracker'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website showcasing my work as a developer and content creator.',
      image: '/project-placeholder.jpg',
      technologies: ['React', 'CSS', 'Framer Motion', 'Vite'],
      demoLink: 'https://ishanhemnani.com',
      codeLink: 'https://github.com/username/portfolio'
    },
    {
      title: 'Weather App',
      description: 'A beautiful weather application with current conditions, forecasts, and location search.',
      image: '/project-placeholder.jpg',
      technologies: ['JavaScript', 'CSS', 'Weather API', 'HTML'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/username/weather-app'
    },
    {
      title: 'Crypto Price Tracker',
      description: 'Real-time cryptocurrency price tracking with historical data charts and market information.',
      image: '/project-placeholder.jpg',
      technologies: ['React', 'CoinGecko API', 'Chart.js', 'CSS'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/username/crypto-tracker',
      featured: true
    }
  ];

  // Technical skills
  const skills = [
    { name: 'Frontend', items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3/SCSS', 'Responsive Design'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'RESTful APIs', 'MongoDB', 'Firebase'] },
    { name: 'Web3', items: ['Solana', 'Smart Contracts', 'Web3.js', 'Phantom Wallet Integration'] },
    { name: 'Tools', items: ['Git/GitHub', 'VS Code', 'Webpack', 'Vite', 'npm/yarn'] }
  ];

  return (
    <div className="work-page">
      <Section 
        id="work-intro" 
        title="My Development Work" 
        subtitle="Here are some of the projects I've built as a developer."
      >
        <div className="work-intro">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="work-intro-text"
          >
            I focus on creating clean, efficient, and user-friendly applications. My projects range from interactive web experiences to blockchain applications, always with a focus on performance and design.
          </motion.p>
        </div>
      </Section>
      
      <Section 
        id="featured-projects" 
        title="Featured Projects" 
        subtitle="Some highlights from my development portfolio."
      >
        <div className="grid grid-2">
          {projects.filter(project => project.featured).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Section>
      
      <Section 
        id="all-projects" 
        title="All Projects" 
        subtitle="A complete collection of my development work."
      >
        <div className="grid grid-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Section>
      
      <Section 
        id="technical-skills" 
        title="Technical Skills" 
        subtitle="Technologies and tools I work with."
      >
        <div className="skills-grid">
          {skills.map((category, index) => (
            <motion.div 
              className="skill-category-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="skill-category-title">{category.name}</h3>
              <ul className="skill-category-list">
                {category.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default WorkPage; 