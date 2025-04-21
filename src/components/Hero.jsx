import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span>Hello, I'm</span>
              <span className="gradient-text">Ishan Hemnani</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-subtitle"
            >
              Developer & Video Editor
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hero-description"
            >
              I code, create, and market. Passionate about tech and content to drive real impact.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a 
                href="#work" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="blob-animation">
              <div className="blob-container">
                <div className="blob"></div>
                <div className="blob-circle">
                  <img src="https://pbs.twimg.com/profile_images/1757267618271240192/a2jXrWmA_400x400.jpg" alt="Ishan Hemnani" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="stat">
            <h3>Video Editor</h3>
            <p>Helped channels grow to<br/><strong>450K+ views</strong></p>
          </div>
          
          <div className="stat">
            <h3>Developer</h3>
            <p>Built multiple<br/><strong>Web & Blockchain apps</strong></p>
          </div>
          
          <div className="stat">
            <h3>Strategist</h3>
            <p>Attracted sponsors &<br/><strong>Grew brand partnerships</strong></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 