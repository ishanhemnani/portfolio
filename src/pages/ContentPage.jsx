import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import ContentCard from '../components/ContentCard.jsx';

const ContentPage = () => {
  // Dummy content data
  const contents = [
    {
      title: 'How to Grow Your YouTube Channel',
      description: 'A comprehensive guide on growing your YouTube channel with proven strategies that worked for me.',
      thumbnail: '/content-placeholder.jpg',
      channelName: 'Dostcast',
      views: '450K+ views',
      link: 'https://www.youtube.com/shorts/-9TdVuOTeRw',
      featured: true
    },
    {
      title: 'Advanced Video Editing Techniques',
      description: 'Learn advanced video editing techniques that can help your content stand out from the competition.',
      thumbnail: '/content-placeholder.jpg',
      channelName: 'Neeraj Arora',
      views: '125K+ views',
      link: 'https://www.youtube.com/shorts/bymC2N8jj5Y'
    },
    {
      title: 'Brand Storytelling Masterclass',
      description: 'How to tell compelling brand stories that resonate with your target audience and drive engagement.',
      thumbnail: '/content-placeholder.jpg',
      channelName: 'Dostcast',
      views: '50K+ views',
      link: 'https://www.youtube.com/shorts/Sk7OGOvxmN4'
    },
    {
      title: 'Content Creation Workflow',
      description: 'My complete workflow for creating high-quality content efficiently, from ideation to publishing.',
      thumbnail: '/content-placeholder.jpg',
      channelName: 'Personal Channel',
      views: '85K+ views',
      link: 'https://www.youtube.com/'
    },
    {
      title: 'Video Editing for Beginners',
      description: 'A beginner-friendly guide to video editing essentials that anyone can follow to create better videos.',
      thumbnail: '/content-placeholder.jpg',
      channelName: 'Neeraj Arora',
      views: '210K+ views',
      link: 'https://www.youtube.com/'
    },
    {
      title: 'Growing a Personal Brand',
      description: 'Strategies for building and growing your personal brand online to attract opportunities.',
      thumbnail: '/content-placeholder.jpg',
      channelName: 'Dostcast',
      views: '95K+ views',
      link: 'https://www.youtube.com/'
    }
  ];

  // Services offered
  const services = [
    {
      title: 'Video Editing',
      description: 'Professional editing for YouTube videos, including color grading, transitions, and effects.',
      icon: '🎬'
    },
    {
      title: 'Content Strategy',
      description: 'Developing content strategies that align with your brand and engage your target audience.',
      icon: '📝'
    },
    {
      title: 'Channel Growth',
      description: 'Strategies to grow your YouTube channel and increase viewership and engagement.',
      icon: '📈'
    },
    {
      title: 'Thumbnail Design',
      description: 'Eye-catching thumbnail designs that increase click-through rates and views.',
      icon: '🖼️'
    }
  ];

  return (
    <div className="content-page">
      <Section 
        id="content-intro" 
        title="Content Creation" 
        subtitle="I help creators and brands produce engaging video content that connects with audiences."
      >
        <div className="content-intro">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="content-intro-text"
          >
            As a video editor and content strategist, I've helped YouTube channels grow to over 450K views. I combine technical editing skills with a deep understanding of audience engagement to create content that resonates and performs well.
          </motion.p>
        </div>
      </Section>
      
      <Section 
        id="content-showcase" 
        title="Content Portfolio" 
        subtitle="Here's a selection of video content I've helped create and edit."
      >
        <div className="grid grid-3">
          {contents.map((content, index) => (
            <ContentCard key={index} content={content} />
          ))}
        </div>
      </Section>
      
      <Section 
        id="content-services" 
        title="Services Offered" 
        subtitle="Professional content creation services to help your brand or channel grow."
      >
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ContentPage; 