import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
        <div className="container">
          <Weather />
          <footer>
            This project was coded by{" "}
            <a href="https://heartfelt-naiad-6b0a98.netlify.app/"
            target="blank"
            rel="noopener noreferrer">
            Antonina Myronenko</a>
            {" "} and is {" "}
            <a 
              href="https://github.com/AntoninaMyr/weather-react-app"
              target="blank"
              rel="noopener noreferrer">
                open-sourced on GitHub
            </a> {" "}
            and{" "}
          <a
            href="https://reliable-tartufo-c2c3d7.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>

          </footer>
        </div> 
    </div>
  );
}

