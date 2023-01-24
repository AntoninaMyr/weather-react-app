import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <footer>
        This project was coded by{" "}
        <a href="https://heartfelt-naiad-6b0a98.netlify.app/"
        // eslint-disable-next-line 
        target="_blank">
        Antonina Myronenko</a>
        {" "} and is {" "}
        <a 
          href="https://github.com/AntoninaMyr/weather-react-app"
          // eslint-disable-next-line 
          target="_blank">
            open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

