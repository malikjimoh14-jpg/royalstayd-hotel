function About() {
  return (
    <>
      <section className="page-banner about-banner">
        <h1>About RoyalStay</h1>
        <p>Discover the story behind our hospitality.</p>
      </section>

      <section className="about-section section">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900"
          alt="RoyalStay hotel exterior"
        />

        <div>
          <span className="subtitle">OUR STORY</span>
          <h2>Creating Memorable Experiences</h2>

          <p>
            RoyalStay is a hospitality brand dedicated to providing guests with
            comfort, luxury and excellent customer service.
          </p>

          <p>
            Our hotel was established with the goal of creating a welcoming
            environment where travellers, families and business guests can enjoy
            quality accommodation and exceptional hospitality.
          </p>

          <p>
            We combine modern facilities with personalised service to make every
            visit a memorable experience.
          </p>
        </div>
      </section>

      <section className="mission-section section">
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>
            To provide exceptional accommodation and hospitality services that
            exceed our guests' expectations.
          </p>
        </div>

        <div className="mission-card">
          <h2>Our Vision</h2>
          <p>
            To become a leading hospitality destination recognised for
            excellence, comfort and outstanding customer satisfaction.
          </p>
        </div>

        <div className="mission-card">
          <h2>Our Values</h2>
          <p>
            Excellence, integrity, respect, comfort and dedication to delivering
            outstanding guest experiences.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
