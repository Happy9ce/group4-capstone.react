function PlanetVideo() {
  return (
    <section className="planet-video" id="planet-video">
      <div className="container">
        {/* Modern High-Tech Video Player Container */}
        <div className="video-player-wrapper">
          <video 
            controls 
            loop 
            muted 
            width="1920" 
            height="1080" 
            poster="https://res.cloudinary.com/dgn3mlotu/image/upload/v1769982633/planet_poster_tki4ng.png"
          >
            <source src="https://res.cloudinary.com/dgn3mlotu/video/upload/v1769982669/planet_video_clahzr.mp4" type="video/mp4" />
            <p>Your browser does not support this video.</p>
          </video>
          {/* Tech Mockup Controls/Decors */}
          <div className="player-decor">
            <div className="decor-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="decor-text">REC [1080P] // PL_DATA_SCAN.LOG</div>
          </div>
        </div>

        {/* Video Description Text Column */}
        <div className="video-text">
          <h2>How Planetary Data Helps Us Understand Space</h2>
          <p>
            Planetary science goes beyond beautiful images. By comparing{' '}
            <span className="highlight">mass</span>, <span className="highlight">diameter</span>,{' '}
            <span className="highlight">gravity</span>, and <span className="highlight">density</span>, 
            astronomers gain vital insights into how planets form, behave, and interact within the cosmic mechanics of the solar system.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PlanetVideo;