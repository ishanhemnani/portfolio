import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import ContentCard from '../components/ContentCard';
import Contact from '../components/Contact';

// Import dummy project images (you would replace these with actual images)
const projectImg1 = '/project-placeholder.jpg';
const projectImg2 = '/project-placeholder.jpg';
const projectImg3 = '/project-placeholder.jpg';

// Import dummy content thumbnails (you would replace these with actual images)
const contentThumb1 = '/content-placeholder.jpg';
const contentThumb2 = '/content-placeholder.jpg';
const contentThumb3 = '/content-placeholder.jpg';

const HomePage = () => {
  // Dummy project data
  const projects = [
    {
      title: '3D Jumper Platform Game',
      description: 'A platform game where you jump between colorful platforms, collect coins, and try to reach new heights. Built with Three.js and Nipple.js.',
      image: projectImg1,
      technologies: ['Three.js', 'Nipple.js', 'Solana', 'JavaScript'],
      demoLink: 'https://3djumper.fun',
      codeLink: 'https://github.com/username/3djumper',
      featured: true
    },
    {
      title: 'E-commerce Dashboard',
      description: 'A comprehensive dashboard for e-commerce store management with analytics, inventory tracking, and order processing.',
      image: projectImg2,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/username/ecommerce-dashboard'
    },
    {
      title: 'Personal Finance Tracker',
      description: 'A web application to track personal finances, create budgets, and visualize spending patterns.',
      image: projectImg3,
      technologies: ['React', 'Firebase', 'Chart.js', 'Styled Components'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/username/finance-tracker'
    }
  ];

  // Content data with updated YouTube links
  const contents = [
    {
      title: 'How to Grow Your YouTube Channel',
      description: 'A comprehensive guide on growing your YouTube channel with proven strategies that worked for me.',
      thumbnail: contentThumb1,
      channelName: 'Dostcast',
      views: '450K+ views',
      link: 'https://www.youtube.com/shorts/-9TdVuOTeRw',
      featured: true
    },
    {
      title: 'Advanced Video Editing Techniques',
      description: 'Learn advanced video editing techniques that can help your content stand out from the competition.',
      thumbnail: contentThumb2,
      channelName: 'Neeraj Arora',
      views: '125K+ views',
      link: 'https://www.youtube.com/shorts/bymC2N8jj5Y'
    },
    {
      title: 'Brand Storytelling Masterclass',
      description: 'How to tell compelling brand stories that resonate with your target audience and drive engagement.',
      thumbnail: contentThumb3,
      channelName: 'Dostcast',
      views: '50K+ views',
      link: 'https://www.youtube.com/shorts/Sk7OGOvxmN4'
    }
  ];

  return (
    <>
      <Hero />
      
      <Section 
        id="work" 
        title="Development Projects" 
        subtitle="Here are some of the web and blockchain projects I've worked on. Each project combines clean code with engaging user experience."
      >
        <div className="grid grid-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Section>
      
      <Section 
        id="content" 
        title="Content Creation" 
        subtitle="I've helped grow YouTube channels and create engaging content that drives views and builds audience loyalty."
      >
        <div className="grid grid-3">
          {contents.map((content, index) => (
            <ContentCard key={index} content={content} />
          ))}
        </div>
      </Section>
      
      <Section 
        id="contact" 
        title="Contact Me" 
        subtitle="Interested in working together? Feel free to reach out through the form below or via email."
      >
        <Contact />
      </Section>
    </>
  );
};

export default HomePage; 