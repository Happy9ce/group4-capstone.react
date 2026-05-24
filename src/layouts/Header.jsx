import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Add background blur depth on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section to highlight correct nav link
      const sections = ['hero', 'planet-video', 'planet-gallery', 'planet-table', 'planet-form'];
      const scrollPosition = window.scrollY + 120; // offset

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container header-container">
        <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="logo-link">
          <img 
            src="https://res.cloudinary.com/dgn3mlotu/image/upload/v1769982629/planet_Logo_tqf4qd.png" 
            alt="planet logo" 
            className="logo"
          />
        </a>

        {/* Desktop & Mobile Menu Navigation */}
        <nav>
          <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <a 
                href="#hero" 
                className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
                onClick={(e) => scrollToSection(e, 'hero')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#planet-video" 
                className={`nav-link ${activeSection === 'planet-video' ? 'active' : ''}`}
                onClick={(e) => scrollToSection(e, 'planet-video')}
              >
                Space Science
              </a>
            </li>
            <li>
              <a 
                href="#planet-gallery" 
                className={`nav-link ${activeSection === 'planet-gallery' ? 'active' : ''}`}
                onClick={(e) => scrollToSection(e, 'planet-gallery')}
              >
                Planets
              </a>
            </li>
            <li>
              <a 
                href="#planet-table" 
                className={`nav-link ${activeSection === 'planet-table' ? 'active' : ''}`}
                onClick={(e) => scrollToSection(e, 'planet-table')}
              >
                Data Hub
              </a>
            </li>
            <li>
              <a 
                href="#planet-form" 
                className={`nav-link ${activeSection === 'planet-form' ? 'active' : ''}`}
                onClick={(e) => scrollToSection(e, 'planet-form')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger Toggle Button for Mobile */}
        <button 
          className="mobile-nav-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
};

export default Header;