import React, { useState, useEffect } from "react";
import axios from "axios";
import CountrySearch from "./Components/CountrySearch";
import "./App.css";

function App() {
  const [countryData, setCountryData] = useState([]);
  const [query,setQuery]=useState('');

  const handleSeachBar = (event) =>{
    setQuery(event.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        if(response.status === 200){
          setCountryData(response.data)
        }
        console.log(response.status)
      } catch (error) {
        console.log('unable to fetchData', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <CountrySearch data={countryData} handleSeachBar={handleSeachBar}
        query={query}
      />
    </div>
  );
}

export default App;
