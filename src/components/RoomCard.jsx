function RoomCard({ room, onBook }) {
  return (
    <div className="room-card">
      <img src={room.image} alt={room.name} />

      <div className="room-info">
        <span className="room-type">{room.type}</span>

        <h3>{room.name}</h3>

        <p>{room.description}</p>

        <div className="room-details">
          <span>🛏 {room.beds}</span>
          <span>👤 {room.guests} Guests</span>
        </div>

        <div className="room-bottom">
          <h3>
            ₦{room.price.toLocaleString()} <small>/ night</small>
          </h3>

          <button onClick={() => onBook(room)}>Book Room</button>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
