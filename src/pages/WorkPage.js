import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

// Import dummy project images (you would replace these with actual images)
const projectImg1 = '/project-placeholder.jpg';
const projectImg2 = '/project-placeholder.jpg';
const projectImg3 = '/project-placeholder.jpg';
const projectImg4 = '/project-placeholder.jpg';
const projectImg5 = '/project-placeholder.jpg';

const WorkPage = () => {
  // Expanded project data
  const projects = [
    {
      title: '3D Jumper Platform Game',
      description: 'A platform game where you jump between colorful platforms, collect coins, and try to reach new heights. Navigate through challenging levels or test your skills in endless Infinity Mode. Earn $JUMPER tokens as you play and compete with others on the global leaderboard.',
      image: projectImg1,
      technologies: ['Three.js', 'Nipple.js', 'Solana', 'JavaScript', 'HTML5', 'CSS3'],
      demoLink: 'https://3djumper.fun',
      codeLink: 'https://github.com/username/3djumper',
      featured: true
    },
    {
      title: 'E-commerce Dashboard',
      description: 'A comprehensive dashboard for e-commerce store management with analytics, inventory tracking, and order processing. Features include real-time sales data, customer behavior insights, product management, and automated order fulfillment.',
      image: projectImg2,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js', 'Material UI'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/username/ecommerce-dashboard'
    },
    {
      title: 'Personal Finance Tracker',
      description: 'A web application to track personal finances, create budgets, and visualize spending patterns. Users can connect bank accounts, categorize transactions, set saving goals, and receive insights on their financial habits.',
      image: projectImg3,
      technologies: ['React', 'Firebase', 'Chart.js', 'Styled Components', 'Plaid API'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/username/finance-tracker'
    },
    {
      title: 'Social Media Scheduler',
      description: 'A tool for scheduling and managing social media posts across multiple platforms. Features include content calendar, post analytics, optimal posting time suggestions, and team collaboration.',
      image: projectImg4,
      technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Social Media APIs'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/username/social-scheduler'
    },
    {
      title: 'Weather Application',
      description: 'A weather application with detailed forecasts, interactive maps, and severe weather alerts. Users can save locations, view historical weather data, and receive daily weather summaries.',
      image: projectImg5,
      technologies: ['React Native', 'Redux', 'Weather API', 'Geolocation', 'Push Notifications'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/username/weather-app'
    }
  ];

  return (
    <div className="work-page">
      <Section 
        title="Development Work" 
        subtitle="Here's a showcase of my development projects. Each project demonstrates my technical skills and ability to create engaging user experiences."
        centered
      >
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="filter-note">
            <p>Projects span across web development, blockchain applications, and interactive experiences.</p>
          </div>
        </motion.div>

        <div className="project-grid grid grid-2" style={{ marginTop: '2rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="work-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ marginTop: '3rem', textAlign: 'center' }}
        >
          <h3>Interested in working together?</h3>
          <p>I'm always open to discussing new projects and opportunities.</p>
          <motion.a 
            href="/contact" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </Section>
    </div>
  );
};

export default WorkPage; 