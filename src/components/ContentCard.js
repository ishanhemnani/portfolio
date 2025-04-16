import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ContentCard.scss';

const ContentCard = ({ content }) => {
  const {
    title,
    description,
    thumbnail,
    channelName,
    views,
    link,
    featured = false
  } = content;

  return (
    <motion.div 
      className={`content-card ${featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="content-image"
      >
        <img src={thumbnail} alt={title} />
        <div className="play-overlay">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 8L16 12L10 16V8Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {featured && (
          <div className="featured-badge">Featured</div>
        )}
        
        {views && (
          <div className="views-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {views}
          </div>
        )}
      </a>
      
      <div className="content-info">
        <h3 className="content-title">{title}</h3>
        
        <div className="channel-info">
          <span className="channel-name">{channelName}</span>
        </div>
        
        <p className="content-description">{description}</p>
        
        <motion.a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-outline watch-btn"
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