import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";
import { useDarkMode } from "./components/hooks/useDarkMode";

const App = () => {
  const [coinData, setCoinData] = useState([]); // coin data is storing the state, and setCoinData is setting coindDatas state.
  const [darkMode, setDarkMode, toggleDarkMode] = useDarkMode(false); //darkMode is storing the state, and setCoinData is setting it.

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true" //getting api data for statistics
      )
      .then(res => setCoinData(res.data)) // using the setCoingData to retain the data under coinData 
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={darkMode ? "dark-mode App" : "App"}> {/*if darkMode is truthy then dark-mode App is the className otherwise if darkMode if false then use the App className*/}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} toggleDarkMode = {toggleDarkMode}/> {/*Navbar is receiving the darkMode state property, setDarkMode state propery, and the toggle prop*/}
      <Charts coinData={coinData} /> {/*Charts is receiving the coinData property*/}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
