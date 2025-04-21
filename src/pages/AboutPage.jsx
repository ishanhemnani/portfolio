import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';

const AboutPage = () => {
  // Skills data
  const skills = {
    development: ['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Solana', 'Web3'],
    videoEditing: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Motion Graphics'],
    marketing: ['Social Media Management', 'Content Strategy', 'Analytics', 'SEO Basics']
  };

  // Timeline data
  const timeline = [
    {
      year: '2023',
      title: 'Web3 Developer',
      company: 'Freelance',
      description: 'Developing blockchain-based applications and working on web3 integration projects.'
    },
    {
      year: '2022',
      title: 'Video Editor & Content Creator',
      company: 'DostCast',
      description: 'Edited videos for a popular YouTube channel, helping grow it to over 450K views.'
    },
    {
      year: '2021',
      title: 'Frontend Developer',
      company: 'Self-employed',
      description: 'Built responsive web applications using React and modern JavaScript.'
    },
    {
      year: '2020',
      title: 'Computer Science Student',
      company: 'University',
      description: 'Studied computer science fundamentals, algorithms, and data structures.'
    }
  ];

  return (
    <div className="about-page">
      <Section 
        id="about-intro" 
        title="About Me" 
        subtitle="I'm a developer and video editor passionate about creating impactful digital experiences."
      >
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I bridge the gap between technology and creative content, bringing a unique perspective to digital projects. With experience in both development and video editing, I understand how to create engaging experiences that resonate with audiences.
            </p>
            <p>
              My journey began with coding, but I quickly discovered a passion for visual storytelling as well. This dual expertise allows me to approach problems holistically, considering both technical implementation and user experience.
            </p>
            <p>
              I'm constantly learning and exploring new technologies, with a particular interest in the intersection of web3, creative content, and community building.
            </p>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="/about-image.jpg" alt="Ishan Hemnani" />
          </motion.div>
        </div>
      </Section>
      
      <Section 
        id="skills" 
        title="My Skills" 
        subtitle="I've developed expertise across several areas of digital creation."
      >
        <div className="skills-container">
          <motion.div 
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Development</h3>
            <ul className="skill-list">
              {skills.development.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>Video Editing</h3>
            <ul className="skill-list">
              {skills.videoEditing.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Marketing</h3>
            <ul className="skill-list">
              {skills.marketing.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>
      
      <Section 
        id="experience" 
        title="Experience" 
        subtitle="My professional journey so far."
      >
        <div className="timeline">
          {timeline.map((item, index) => (
            <motion.div 
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-company">{item.company}</div>
                <p className="timeline-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default AboutPage; 