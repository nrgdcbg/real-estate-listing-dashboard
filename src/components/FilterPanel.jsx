import { useState } from "react";

export default function FilterPanel( { onFilter } ) {
    const [location, setLocation] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [status, setStatus] = useState("");

    const handleFilter = () => {
        onFilter({ location, minPrice, maxPrice, status });
    };

    return (
        <div className = "filter-panel">
            <input
                type = "text"
                placeholder = "Location"
                value = {location}
                onChange = {(e) => setLocation(e.target.value)}
            />
            <input
                type = "number"
                placeholder = "Min Price"
                value = {minPrice}
                onChange = {(e) => setMinPrice(e.target.value)}
            />
            <input
                type = "number"
                placeholder = "Max Price"
                value = {maxPrice}
                onChange = {(e) => setMaxPrice(e.target.value)}
            />
            <select
                value = {status}
                onChange = {(e) => setStatus(e.target.value)}
            >
                <option value = "">Select Occupancy Status</option>
                <option value = "Available">Available</option>
                <option value = "Occupied">Occupied</option>
            </select>
            
            <button onClick = {handleFilter}>Filter</button>
        </div>
  )
}
