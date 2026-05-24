import { useState, useEffect } from 'react';

const PlanetGallery = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPlanets(active);

    return () => {
      active = false;
    };
  }, []);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    fetchPlanets(true);
  };

  // Filter planets based on selection
  const filteredPlanets = planets.filter((planet) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'sol') return planet.star === 'Sol';
    if (activeFilter === 'exoplanet') return planet.star !== 'Sol';
    return true;
  });

  return (
    <section className="planet-gallery" id="planet-gallery">
      <div className="container">
        {/* Section Header */}
        <div className="gallery-header">
          <h2>Visualizing the Differences Between Planets</h2>
          <p>
            Each planet in our universe has unique physical characteristics. Visual comparisons help highlight 
            how vastly different terrestrial planets and moons are from distant exoplanets and giant stellar bodies.
          </p>
        </div>

        {/* Dynamic Category Filter Tabs */}
        {!error && !loading && (
          <div className="gallery-filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Worlds
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'sol' ? 'active' : ''}`}
              onClick={() => setActiveFilter('sol')}
            >
              Sol System
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'exoplanet' ? 'active' : ''}`}
              onClick={() => setActiveFilter('exoplanet')}
            >
              Exoplanets
            </button>
          </div>
        )}

        {/* Loading Skeleton State */}
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

        {/* Error Fallback Panel */}
        {error && !loading && (
          <div className="gallery-error">
            <div className="error-icon">⚠️</div>
            <p>{error}</p>
            <button className="retry-button" onClick={handleRetry}>
              Retry Fetch
            </button>
          </div>
        )}

        {/* Visual Image Grid Gallery */}
        {!loading && !error && (
          <div className="image-gallery">
            {filteredPlanets.map((planet, index) => (
              <figure key={planet.name || index} className="planet-card">
                <div className="planet-card-image-container">
                  <img src={planet.image} alt={`Visual snapshot of ${planet.name}`} loading="lazy" />
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

        {/* Empty state helper if no worlds match filter */}
        {!loading && !error && filteredPlanets.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px 0', color: '#6b7280' }}>
            <p>No planetary bodies matched the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PlanetGallery;
