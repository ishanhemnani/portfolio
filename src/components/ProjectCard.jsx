import { motion } from 'framer-motion';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, demoLink, codeLink, featured } = project;
  
  return (
    <motion.div 
      className={`project-card ${featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <div className="project-image">
        <img src={image || '/project-default.jpg'} alt={title} />
        <div className="project-links">
          {demoLink && (
            <motion.a 
              href={demoLink} 
              className="btn btn-primary btn-sm"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
          )}
          
          {codeLink && (
            <motion.a 
              href={codeLink} 
              className="btn btn-outline btn-sm"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Code
            </motion.a>
          )}
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-technologies">
          {technologies && technologies.map((tech, index) => (
            <span key={index} className="project-technology">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 