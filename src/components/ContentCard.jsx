import { motion } from 'framer-motion';
import '../styles/ContentCard.css';

const ContentCard = ({ content }) => {
  const { title, description, thumbnail, channelName, views, link, featured } = content;
  
  return (
    <motion.div 
      className={`content-card ${featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="content-thumbnail">
        <img src={thumbnail || '/content-default.jpg'} alt={title} />
        <div className="play-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="10 8 16 12 10 16 10 8"></polygon>
          </svg>
        </div>
        {views && <div className="content-views">{views}</div>}
      </a>
      
      <div className="content-info">
        <h3 className="content-title">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        
        {channelName && (
          <div className="content-channel">
            {channelName}
          </div>
        )}
        
        <p className="content-description">{description}</p>
        
        <motion.a 
          href={link} 
          className="btn btn-primary btn-sm"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Watch Video
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ContentCard; 