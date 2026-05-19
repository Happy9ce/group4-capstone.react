import { useState, useEffect } from 'react';

const PlanetGallery = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPlanets = async (active = true) => {
    try {
      const response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
      if (!response.ok) {
        throw new Error(`Failed to fetch planet data (Status: ${response.status})`);
      }
      const data = await response.json();
      if (active) {
        setPlanets(data);
        setError(null);
      }
    } catch (err) {
      if (active) {
        setError(err.message || 'An error occurred while fetching the planet data.');
      }
    } finally {
      if (active) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    let active = true;
    
    const triggerFetch = async () => {
      setLoading(true);
      setError(null);
      await fetchPlanets(active);
    };

    triggerFetch();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="planet-gallery" id="planet-gallery">
      <div className="image-text">
        <h2>Visualizing the Differences Between Planets</h2>
        <p>Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how vastly different terrestrial planets are from gas giants and ice giants.</p>
      </div>

      {loading && (
        <div className="gallery-loading">
          {[...Array(6)].map((_, i) => (
            <div className="skeleton-card" key={i}>
              <div className="skeleton-image"></div>
              <div className="skeleton-text title"></div>
              <div className="skeleton-text subtitle"></div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="gallery-error">
          <div className="error-icon">⚠️</div>
          <p>{error}</p>
          <button className="retry-button" onClick={() => fetchPlanets(true)}>Retry Fetch</button>
        </div>
      )}

      {!loading && !error && (
        <div className="image-gallery">
          {planets.map((planet, index) => (
            <figure key={planet.name || index} className="planet-card">
              <div className="planet-card-image-container">
                <img src={planet.image} alt={planet.name} loading="lazy" />
              </div>
              <figcaption className="planet-card-caption">
                <h3>{planet.name}</h3>
                <div className="planet-detail">
                  <span className="detail-label">Distance:</span>
                  <span className="detail-value">{planet.distance}</span>
                </div>
                <div className="planet-meta">
                  <span>⭐️ {planet.star}</span>
                  <span>🌙 Moons: {planet.moons}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
};

export default PlanetGallery;
