import React,{useEffect,useState} from "react";
import "./country-search.css";

const CountrySearch = ({ data, handleSeachBar,query }) => {
    const [filteredData, setFilteredData] = useState([])
  

  console.log(data);
  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  useEffect(() => {
    if (query) {
        const lowerCaseQuery = query.toLowerCase();
        const filteredCountries = data.filter((country) =>
          country.name.common.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredData(filteredCountries);
      } else {
        setFilteredData(data);
      }
  
  }, [query,data])

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="country-container">
      <div className="search-container">
        <input className="searchbar"
        type="text"
        placeholder="Search for Countries..." 
        onChange={handleSeachBar}
        value={query}
        />
      </div>
      <div className="country-cards-container">
      {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div className="country-box" key={index}>
              <img
                className="flagImage"
                src={item.flags.png}
                alt={item.name.common}
              />
              <h4 className="country-name">{item.name.common}</h4>
            </div>
            
          ))
        ) : (
          <div>No countries found.</div>
        )}
      </div>
    </div>
  );
};

export default CountrySearch;
