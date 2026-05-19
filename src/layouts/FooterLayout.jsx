const Footer = () => {
  return (
    <footer>
      <div id="about-planets">
        <div className="about-text">
          <h2>About Planetary Data</h2>
          <p>Planetary data encompasses a wide range of measurable characteristics of planets within our solar system and beyond. This data is crucial for understanding planetary formation, evolution, and potential habitability.</p>
          <ul>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Featured</a></li>
            <li><a href="#">Partnership</a></li>
            <li><a href="#">Business Relation</a></li>
          </ul>
        </div>
      </div><hr />
      <div className="copyright-text">
        <p>&copy; 2026 Happiness Ogbonnaya. All rights reserved</p>
      </div>
      <div className="copyright-links">
        <a href="#">Privacy & Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;