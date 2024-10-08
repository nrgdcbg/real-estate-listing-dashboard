export default function PropertyCard( { property, onClick }) {
  return (
    <div className = "property-card" onClick = {() => onClick(property)}>
      <div className = "property-details">
        <h3>{property.name}</h3>
        <p>Location: {property.location}</p>
        <p>Price: PHP {property.price.toLocaleString()}</p>
        <p>Status: {property.status}</p>
      </div>

      <img src = {property.images[0]} alt = {property.name} className = "property-image" />
    </div>
  )
}
