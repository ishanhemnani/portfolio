import React from 'react';
import Section from '../components/Section';
import ContentCard from '../components/ContentCard';
import { motion } from 'framer-motion';

// Import dummy content thumbnails (you would replace these with actual images)
const contentThumb1 = '/content-placeholder.jpg';
const contentThumb2 = '/content-placeholder.jpg';
const contentThumb3 = '/content-placeholder.jpg';
const contentThumb4 = '/content-placeholder.jpg';
const contentThumb5 = '/content-placeholder.jpg';
const contentThumb6 = '/content-placeholder.jpg';

const ContentPage = () => {
  // Expanded content data with updated YouTube links
  const contents = [
    {
      title: 'How to Grow Your YouTube Channel',
      description: 'A comprehensive guide on growing your YouTube channel with proven strategies that worked for me. Learn how to optimize your content, improve audience retention, and increase engagement.',
      thumbnail: contentThumb1,
      channelName: 'Dostcast',
      views: '450K+ views',
      link: 'https://www.youtube.com/shorts/-9TdVuOTeRw',
      featured: true
    },
    {
      title: 'Advanced Video Editing Techniques',
      description: 'Learn advanced video editing techniques that can help your content stand out from the competition. Covers transitions, color grading, audio enhancement, and visual effects.',
      thumbnail: contentThumb2,
      channelName: 'Neeraj Arora',
      views: '125K+ views',
      link: 'https://www.youtube.com/shorts/bymC2N8jj5Y'
    },
    {
      title: 'Brand Storytelling Masterclass',
      description: 'How to tell compelling brand stories that resonate with your target audience and drive engagement. Includes frameworks for creating authentic and emotionally-driven narratives.',
      thumbnail: contentThumb3,
      channelName: 'Dostcast',
      views: '50K+ views',
      link: 'https://www.youtube.com/shorts/Sk7OGOvxmN4'
    },
    {
      title: 'Creating Viral TikTok Content',
      description: 'Strategies for creating content that goes viral on TikTok. Covers trending patterns, optimal video length, hooks, and leveraging the algorithm.',
      thumbnail: contentThumb4,
      channelName: 'Dostcast',
      views: '260K+ views',
      link: 'https://www.youtube.com/shorts/-9TdVuOTeRw'
    },
    {
      title: 'YouTube Analytics Deep Dive',
      description: 'A detailed exploration of YouTube analytics and how to use data to improve your content strategy. Learn to interpret key metrics and make data-driven decisions.',
      thumbnail: contentThumb5,
      channelName: 'Neeraj Arora',
      views: '85K+ views',
      link: 'https://www.youtube.com/shorts/bymC2N8jj5Y'
    },
    {
      title: 'Creating High-Converting Product Videos',
      description: 'How to create product videos that drive conversions and sales. Covers storytelling, demonstration techniques, and persuasive messaging.',
      thumbnail: contentThumb6,
      channelName: 'Dostcast',
      views: '40K+ views',
      link: 'https://www.youtube.com/shorts/Sk7OGOvxmN4'
    }
  ];

  // Content statistics
  const stats = [
    { label: 'Videos Edited', value: '50+' },
    { label: 'Highest View Count', value: '450K+' },
    { label: 'Channel Growth Contributed', value: '200K+' },
    { label: 'Sponsors Attracted', value: '15+' }
  ];

  return (
    <div className="content-page">
      <Section 
        title="Content Creation" 
        subtitle="My work as a video editor and content strategist has helped channels grow their audience and improve engagement. Here are some highlights from my portfolio."
        centered
      >
        <motion.div
          className="content-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '1.5rem',
            margin: '2rem 0 3rem',
            textAlign: 'center'
          }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat-item card">
              <h3 style={{ color: '#6c63ff', fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="content-grid grid grid-3">
          {contents.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ContentCard content={content} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="content-services"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{ marginTop: '4rem' }}
        >
          <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Content Services</h3>
          <div className="grid grid-3">
            <div className="service-item card">
              <h4>Video Editing</h4>
              <p>Professional editing for YouTube, social media, and promotional content with a focus on audience retention.</p>
            </div>
            <div className="service-item card">
              <h4>Content Strategy</h4>
              <p>Data-driven content planning and optimization to improve channel growth and audience engagement.</p>
            </div>
            <div className="service-item card">
              <h4>Brand Storytelling</h4>
              <p>Creating compelling narratives that connect with your audience and strengthen your brand identity.</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="work-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ marginTop: '3rem', textAlign: 'center' }}
        >
          <h3>Need help with your content?</h3>
          <p>Let's discuss how I can help you create engaging content that resonates with your audience.</p>
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

export default ContentPage; 