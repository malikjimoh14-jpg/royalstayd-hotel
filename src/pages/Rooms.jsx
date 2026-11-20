import { useState, useEffect } from "react";
import RoomCard from "../components/RoomCard";

const rooms = [
  {
    id: 1,
    name: "Standard Room",
    type: "COMFORT",
    price: 45000,
    beds: "1 Queen Bed",
    guests: 2,
    description: "A comfortable and elegant room for a relaxing stay.",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=700",
  },
  {
    id: 2,
    name: "Deluxe Room",
    type: "POPULAR",
    price: 75000,
    beds: "1 King Bed",
    guests: 2,
    description: "Enjoy extra space and modern luxury in our deluxe room.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=700",
  },
  {
    id: 3,
    name: "Executive Suite",
    type: "PREMIUM",
    price: 120000,
    beds: "1 King Bed",
    guests: 3,
    description: "A premium suite designed for business and leisure guests.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700",
  },
  {
    id: 4,
    name: "Presidential Suite",
    type: "LUXURY",
    price: 200000,
    beds: "2 King Beds",
    guests: 4,
    description: "Experience the ultimate luxury with our presidential suite.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700",
  },
];

function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedBooking = localStorage.getItem("royalstayBooking");

    if (savedBooking) {
      setMessage("Your previous booking details are saved in this browser.");
    }
  }, []);

  function handleChange(e) {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  }

  function handleBooking(e) {
    e.preventDefault();

    if (!selectedRoom) {
      setMessage("Please select a room first.");
      return;
    }

    if (new Date(booking.checkOut) <= new Date(booking.checkIn)) {
      setMessage("Check-out must be after check-in.");
      return;
    }

    const bookingDetails = {
      ...booking,
      room: selectedRoom.name,
      price: selectedRoom.price,
    };

    localStorage.setItem("royalstayBooking", JSON.stringify(bookingDetails));

    setMessage(
      `Booking request received for ${selectedRoom.name}. Our team will contact you to confirm your reservation.`,
    );

    setBooking({
      name: "",
      email: "",
      checkIn: "",
      checkOut: "",
      guests: "1",
    });

    setSelectedRoom(null);
  }

  return (
    <>
      <section className="page-banner rooms-banner">
        <h1>Our Rooms & Suites</h1>
        <p>Find the perfect space for your next stay.</p>
      </section>

      <section className="rooms-section section">
        <div className="section-heading">
          <span className="subtitle">ACCOMMODATION</span>
          <h2>Explore Our Rooms</h2>
          <p>Choose from our carefully designed room categories.</p>
        </div>

        <div className="rooms-grid">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} onBook={setSelectedRoom} />
          ))}
        </div>
      </section>

      <section className="booking-section section" id="booking">
        <div className="booking-heading">
          <span className="subtitle">RESERVATIONS</span>
          <h2>Book Your Stay</h2>
          <p>Complete the form below to submit your booking request.</p>
        </div>

        {selectedRoom && (
          <div className="selected-room">
            <h3>Selected Room: {selectedRoom.name}</h3>
            <p>₦{selectedRoom.price.toLocaleString()} per night</p>
            <button type="button" onClick={() => setSelectedRoom(null)}>
              Change Room
            </button>
          </div>
        )}

        <form className="booking-form" onSubmit={handleBooking}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={booking.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={booking.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Check-in Date</label>
            <input
              type="date"
              name="checkIn"
              min={new Date().toISOString().split("T")[0]}
              value={booking.checkIn}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Check-out Date</label>
            <input
              type="date"
              name="checkOut"
              min={booking.checkIn || new Date().toISOString().split("T")[0]}
              value={booking.checkOut}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Number of Guests</label>
            <select
              name="guests"
              value={booking.guests}
              onChange={handleChange}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </div>

          <button type="submit" className="primary-button">
            Submit Booking Request
          </button>

          {message && <p className="form-message">{message}</p>}
        </form>
      </section>
    </>
  );
}

export default Rooms;
