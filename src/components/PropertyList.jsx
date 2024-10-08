import PropertyCard from "./PropertyCard"

export default function PropertyList( { properties, onSelectProperty } ) {
  return (
    <div className = "property-list">
      {properties.length === 0 ? (
        <h1>No Properties Found!</h1>
      ) : (
        properties.map((property) => (
          <PropertyCard
            key = {property.id}
            property = {property}
            onClick = {onSelectProperty}
          />
        ))
      )}
    </div>
  )
}