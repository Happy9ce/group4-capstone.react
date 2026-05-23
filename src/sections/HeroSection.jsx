const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero">
        <h1>Explore Our Solar System Through Data</h1>
        <p>
          Understand the planets not just by name, but by measurable facts. From
          size and mass to gravity and density, this page breaks down the solar
          system in a clear, data-driven way.
        </p>
        <button onClick={() => scrollToSection("planet-gallery")}>
          Explore the data
        </button>
        <button onClick={() => scrollToSection("planet-form")}>
          {" "}
          Contact Us
        </button>
      </div>
      <div className="hero-image">
        <img
          src="https://res.cloudinary.com/dgn3mlotu/image/upload/v1769982632/planet_wbnihl.png"
          alt="planet"
          width="516px"
          height="340px"
        />
      </div>
    </section>
  );
};

export default HeroSection;
