const GallerySection = () => {
  return (
    <section className="planet-gallery">
      <div className="image-text">
        <h2>Visualizing the Differences Between Planets</h2>
        <p>Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how vastly different terrestrial planets are from gas giants and ice giants.</p>
      </div>
      <figure className="image-gallery">
        <img src="https://res.cloudinary.com/dgn3mlotu/image/upload/v1769982593/planet_1_vq3nes.png" alt="different planets" width="100%" />
        <img src="https://res.cloudinary.com/dgn3mlotu/image/upload/v1769982638/planet_2_h4b4gf.png" alt="different planets" width="100%" />
        <img src="https://res.cloudinary.com/dgn3mlotu/image/upload/v1769982629/planet_3_t1ss12.png" alt="different planets" width="100%" />
        <img src="https://res.cloudinary.com/dgn3mlotu/image/upload/v1769982628/planet_4_yemadv.jpg" alt="different planets" width="100%" />
        <img src="https://res.cloudinary.com/dgn3mlotu/image/upload/v1769982625/planet_5_rbbknn.jpg" alt="different planets" width="100%" />
        <img src="https://res.cloudinary.com/dgn3mlotu/image/upload/v1769982627/planet_6_kkubzo.jpg" alt="different planets" width="100%" />
        <img src="https://res.cloudinary.com/dgn3mlotu/image/upload/v1769982628/planet_7_drob8k.jpg" alt="different planets" width="100%" />
        <img src="https://res.cloudinary.com/dgn3mlotu/image/upload/v1769982630/planet_8_cnvrih.jpg" alt="different planets" width="100%" />
      </figure>
    </section>
  );
};

export default GallerySection;