export default function PropertyDetail( { property, onClose } ) {
  if (!property) return null;

  return (
    <div className = "property-detail">
      <button className = "close-button" onClick = {onClose}>Close</button>
      <h2>{property.name}</h2>
      <p>Location: {property.location}</p>
      <p>Price: PHP {property.price.toLocaleString()}</p>
      <p>Status: {property.status}</p>
      <p>Rooms: {property.rooms}</p>
      <p>Size: {property.size}</p>
      <p>Description: {property.description}</p>
      <div className = "images">
        {property.images.map((img, index) => (
          <img key = {index} src = {img} alt = {property.name} />
        ))}
      </div>
    </div>
  )
}
