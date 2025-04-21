import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Pages
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import WorkPage from './pages/WorkPage.jsx';
import ContentPage from './pages/ContentPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/content" element={<ContentPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 