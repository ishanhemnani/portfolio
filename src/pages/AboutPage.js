import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Section 
        title="About Me" 
        subtitle="I'm a creative technologist who codes, creates, and markets - passionate about using tech and video editing to drive real impact."
        centered
      >
        <div className="grid grid-2" style={{ gap: '2rem' }}>
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>My Journey</h3>
            <p>
              I'm pursuing B.Tech in Mechanical Engineering at MNIT Jaipur (2022-2026), but my passion extends beyond traditional engineering. I'm deeply interested in the intersection of technology, content creation, and marketing.
            </p>
            <p>
              My journey has involved working with popular YouTube channels where I've helped creators optimize their content and grow their audience. I've also developed web applications, particularly in the blockchain space.
            </p>
            <p>
              I'm a member of the AevyTv Video Mastery Cohort where I learned storytelling, audience retention strategies, and performance metrics. I'm also part of the 100xDevs Cohort which has strengthened my problem-solving and analytical abilities.
            </p>
          </motion.div>
          
          <motion.div 
            className="experience-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>Experience</h3>
            <div className="experience-item">
              <h4>Dostcast (1.2M Subscribers)</h4>
              <p className="experience-role">Video Editor (Intern)</p>
              <ul>
                <li>Helped scale audience engagement, with edited videos reaching <strong>450K, 260K, and 125K+ views</strong></li>
                <li>Worked on content for a channel averaging <strong>40-50K views per video</strong></li>
                <li>Collaborated with teams to align video content with brand messaging, attracting new sponsors and clients</li>
              </ul>
            </div>
            
            <div className="experience-item">
              <h4>Neeraj Arora (874k Subscribers)</h4>
              <p className="experience-role">Video Editor (Intern)</p>
              <ul>
                <li>Elevated channel performance by editing content that outperformed its average (<strong>one video reaching 125K+ views on a 5-10K avg. viewership channel</strong>)</li>
                <li>Applied consumer psychology to optimize video structure and increase engagement</li>
              </ul>
            </div>
            
            <div className="experience-item">
              <h4>Mostli</h4>
              <p className="experience-role">Video Content Lead (Remote)</p>
              <ul>
                <li>Led video projects that strengthened the brand's digital presence, increasing shareability and virality</li>
                <li>Developed client-focused brand story videos that resonated with target audiences</li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="skills-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Key Skills</h3>
          <div className="grid grid-3">
            <div className="skill-category">
              <h4>Client Acquisition & Engagement</h4>
              <p>Strong ability to connect with audiences, nurture relationships, and close deals.</p>
            </div>
            
            <div className="skill-category">
              <h4>Project & Team Management</h4>
              <p>Skilled at leading projects and coordinating cross-functional teams.</p>
            </div>
            
            <div className="skill-category">
              <h4>Video Editing</h4>
              <p>Proficient in PremierePro and AfterEffects for creating engaging video content.</p>
            </div>
            
            <div className="skill-category">
              <h4>Web Development</h4>
              <p>JavaScript, React.js, Node.js, Supabase, Railway, and Git for building interactive web applications.</p>
            </div>
            
            <div className="skill-category">
              <h4>Content Strategy</h4>
              <p>Trained as a viral specialist in storytelling, AI tools, sound design, and audience analytics.</p>
            </div>
            
            <div className="skill-category">
              <h4>Brand Development</h4>
              <p>Experience in attracting sponsors and increasing brand partnerships via high-retention content strategies.</p>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default AboutPage; 