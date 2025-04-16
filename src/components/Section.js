import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Section.scss';

const Section = ({ 
  id, 
  title, 
  subtitle, 
  className = '', 
  children,
  centered = false
}) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        <motion.div 
          className={`section-header ${centered ? 'text-center' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </motion.div>
        
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section; 