import React from 'react';
import Section from '../components/Section';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Section 
        title="Get In Touch" 
        subtitle="Interested in working together? Feel free to reach out through the form below or via email directly."
        centered
      >
        <motion.div
          className="contact-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}
        >
          <p>
            Whether you're looking for a video editor, content strategist, or web developer for your next project, I'd love to hear from you. I'm currently open to:
          </p>
          <div className="grid grid-3" style={{ margin: '2rem 0' }}>
            <div className="availability-item card">
              <h4>Freelance Projects</h4>
              <p>Short-term collaborations for specific projects or needs.</p>
            </div>
            <div className="availability-item card">
              <h4>Contract Work</h4>
              <p>Longer-term arrangements for ongoing content or development needs.</p>
            </div>
            <div className="availability-item card">
              <h4>Full-time Positions</h4>
              <p>Exciting roles in video editing, content creation, or web development.</p>
            </div>
          </div>
        </motion.div>
        
        <Contact />
        
        <motion.div
          className="extra-contact-options"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ marginTop: '4rem', textAlign: 'center' }}
        >
          <h3>Connect on Social Media</h3>
          <p>Feel free to also connect with me on social media or check out my work.</p>
          <div className="social-grid" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1.5rem' }}>
            <motion.a 
              href="https://github.com/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '0.5rem 1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                color: '#f5f5f7',
                fontWeight: '500'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '0.5rem 1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                color: '#f5f5f7',
                fontWeight: '500'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </motion.a>
            <motion.a 
              href="https://twitter.com/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '0.5rem 1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                color: '#f5f5f7',
                fontWeight: '500'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
              Twitter
            </motion.a>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default ContactPage; 