import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="subtitle">WELCOME TO ROYALSTAY</span>

          <h1>
            Experience Luxury. <br />
            Experience Comfort.
          </h1>

          <p>
            Discover a perfect blend of elegance, comfort and exceptional
            hospitality. Your unforgettable stay begins here.
          </p>

          <Link to="/rooms" className="primary-button">
            Explore Our Rooms
          </Link>
        </div>
      </section>

      <section className="welcome section">
        <div>
          <span className="subtitle">YOUR COMFORT IS OUR PRIORITY</span>
          <h2>Where Luxury Meets Hospitality</h2>

          <p>
            At RoyalStay, we believe every guest deserves an exceptional
            experience. From beautifully designed rooms to outstanding customer
            service, we make every moment special.
          </p>

          <Link to="/about" className="text-link">
            Discover Our Story →
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900"
          alt="Luxury hotel bedroom"
        />
      </section>

      <section className="services section">
        <div className="section-heading">
          <span className="subtitle">WHAT WE OFFER</span>
          <h2>Our Hotel Facilities</h2>
        </div>

        <div className="service-grid">
          <div className="service-card">
            <span>🛏️</span>
            <h3>Luxury Rooms</h3>
            <p>Beautifully furnished rooms designed for relaxation.</p>
          </div>

          <div className="service-card">
            <span>🍽️</span>
            <h3>Fine Dining</h3>
            <p>Enjoy delicious meals prepared by professional chefs.</p>
          </div>

          <div className="service-card">
            <span>🏊</span>
            <h3>Swimming Pool</h3>
            <p>Relax and refresh in our beautiful swimming pool.</p>
          </div>

          <div className="service-card">
            <span>💆</span>
            <h3>Spa & Wellness</h3>
            <p>Enjoy peaceful moments with our wellness services.</p>
          </div>
        </div>
      </section>

      <section className="booking-banner">
        <h2>Your Perfect Stay Awaits</h2>
        <p>Book your next unforgettable experience with RoyalStay.</p>
        <Link to="/rooms" className="primary-button">
          Book Your Stay
        </Link>
      </section>
    </>
  );
}

export default Home;
