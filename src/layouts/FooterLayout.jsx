const Footer = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand Statement */}
          <div className="footer-brand">
            <h4>Solar System Explorer</h4>
            <p>
              A premium, data-driven visualization platform built to demystify planetary physics. 
              Explore mass, density, gravity, and orbit measurements taken straight from verified scientific logs.
            </p>
          </div>

          {/* Quick Section Navigation Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>Home Base</a>
              </li>
              <li>
                <a href="#planet-video" onClick={(e) => scrollToSection(e, 'planet-video')}>Space Science</a>
              </li>
              <li>
                <a href="#planet-gallery" onClick={(e) => scrollToSection(e, 'planet-gallery')}>Planet Cards</a>
              </li>
              <li>
                <a href="#planet-table" onClick={(e) => scrollToSection(e, 'planet-table')}>Planetary Facts</a>
              </li>
              <li>
                <a href="#planet-form" onClick={(e) => scrollToSection(e, 'planet-form')}>Inquiries</a>
              </li>
            </ul>
          </div>

          {/* Team Members List */}
          <div className="footer-team">
            <h4>Development Crew</h4>
            <ul className="footer-team-grid">
              <li><a href="#team" onClick={(e) => e.preventDefault()}>🪐 Basilia</a></li>
              <li><a href="#team" onClick={(e) => e.preventDefault()}>🚀 Ayooluwa</a></li>
              <li><a href="#team" onClick={(e) => e.preventDefault()}>🌌 Daniel</a></li>
              <li><a href="#team" onClick={(e) => e.preventDefault()}>☄️ Adeolu</a></li>
              <li><a href="#team" onClick={(e) => e.preventDefault()}>🛰️ Faith</a></li>
              <li><a href="#team" onClick={(e) => e.preventDefault()}>✨ Happiness</a></li>
              <li><a href="#team" onClick={(e) => e.preventDefault()}>⭐ Lordrick</a></li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Designed by Amaka and Ifeoma A. Built by Group 4 Novara . All rights reserved.</p>
          <p>
            Built for <a href="https://tsacademy.com" target="_blank" rel="noopener noreferrer">TSAcademy Capstone</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
