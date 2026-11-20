import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>
          ROYAL<span>STAY.</span>
        </h2>
        <p>Experience comfort, elegance and unforgettable hospitality.</p>
      </div>

      <div>
        <h3>Quick Links</h3>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/rooms">Our Rooms</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div>
        <h3>Contact Us</h3>
        <p>Email: info@royalstay.com</p>
        <p>Phone: +234 800 123 4567</p>
        <p>Abuja, Nigeria</p>
      </div>

      <p className="copyright">© 2026 RoyalStay Hotel. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
