import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import Contact from '../components/Contact.jsx';

const ContactPage = () => {
  const faqItems = [
    {
      question: 'What services do you offer?',
      answer: 'I offer web development services (frontend, backend, and full-stack), video editing for content creators, and digital marketing strategy consulting.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity and scope. A simple website might take 2-3 weeks, while a complex web application could take 6-8 weeks or more. Video editing projects typically have a 3-5 day turnaround.'
    },
    {
      question: 'Do you take on freelance projects?',
      answer: 'Yes, I\'m available for freelance projects. I prefer to work on long-term collaborations but am open to short-term projects as well.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'I offer flexible pricing options including hourly rates, fixed project fees, and retainer arrangements. Pricing depends on the scope, complexity, and timeline of your project.'
    },
    {
      question: 'Can we schedule a call to discuss my project?',
      answer: 'Absolutely! You can use the contact form to request a call, and I\'ll get back to you within 24-48 hours to schedule a consultation.'
    }
  ];

  return (
    <div className="contact-page">
      <Section 
        id="contact-intro" 
        title="Get In Touch" 
        subtitle="Interested in working together? Let's discuss how I can help with your project."
      >
        <div className="contact-methods">
          <motion.div 
            className="contact-method-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-method-icon">📧</div>
            <h3>Email</h3>
            <p>hemnanishan@gmail.com</p>
            <a href="mailto:hemnanishan@gmail.com" className="btn btn-outline">Send Email</a>
          </motion.div>
          
          <motion.div 
            className="contact-method-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="contact-method-icon">📱</div>
            <h3>Phone</h3>
            <p>+91 9024335930</p>
            <a href="tel:+919024335930" className="btn btn-outline">Call Me</a>
          </motion.div>
          
          <motion.div 
            className="contact-method-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="contact-method-icon">🔗</div>
            <h3>Social Media</h3>
            <p>Connect with me online</p>
            <div className="social-links-small">
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </motion.div>
        </div>
      </Section>
      
      <Section 
        id="contact-form" 
        title="Send Me a Message" 
        subtitle="Fill out the form below and I'll get back to you as soon as possible."
      >
        <Contact />
      </Section>
      
      <Section 
        id="faq" 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions about working with me."
      >
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <motion.div 
              className="faq-item"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="faq-question">{item.question}</h3>
              <p className="faq-answer">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ContactPage; 