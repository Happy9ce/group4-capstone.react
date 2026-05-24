const HeroSection = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
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
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Explore Our Solar System Through Data</h1>
          <p>
            Understand the planets not just by name, but by measurable facts. From
            size and mass to gravity and density, this page breaks down the solar
            system in a clear, data-driven way.
          </p>
          <div className="btn-group">
            <button 
              className="btn-primary" 
              onClick={(e) => scrollToSection(e, "planet-gallery")}
            >
              Explore the data
            </button>
            <button 
              className="btn-secondary" 
              onClick={(e) => scrollToSection(e, "planet-form")}
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            src="https://res.cloudinary.com/dgn3mlotu/image/upload/v1769982632/planet_wbnihl.png"
            alt="Beautiful illustration of a Saturn-like ringed planet"
            width="516px"
            height="340px"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
