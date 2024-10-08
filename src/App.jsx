import { useState, useEffect } from "react";
import PropertyDetail from "./components/PropertyDetail";
import PropertyList from "./components/PropertyList";
import FilterPanel from "./components/FilterPanel";
import "./styles/App.css";

function App() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastProperty = currentPage * itemsPerPage;
  const indexOfFirstProperty = indexOfLastProperty - itemsPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  useEffect(() => {
    fetch("/data/property_data.json")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
        setFilteredProperties(data);
      })
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  const handleSelectProperty = (property) => {
    setSelectedProperty(property);
  };

  const handleFilter = (filter) => {
    const filtered = properties.filter((property) => {
      const location = !filter.location || property.location.toLowerCase().includes(filter.location.toLowerCase());
      const minPrice = !filter.minPrice || property.price >= Number(filter.minPrice);
      const maxPrice = !filter.maxPrice || property.price <= Number(filter.maxPrice);
      const status = !filter.status || property.status === filter.status;

      return location && minPrice && maxPrice && status;
    });
    
    setFilteredProperties(filtered);
  };

  return (
    <div className = "app">
      {!selectedProperty && <FilterPanel onFilter = {handleFilter} />}

      {selectedProperty ? (
        <PropertyDetail property = {selectedProperty} onClose = {() => setSelectedProperty(null)} />
      ) : (
        <>
          <PropertyList properties = {currentProperties} onSelectProperty = {handleSelectProperty} />
          <div className = "pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key = {index}
                onClick = {() => setCurrentPage(index + 1)}
                disabled = {currentPage === index + 1}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default App
