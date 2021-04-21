import { useState } from "react";
import styles from "../styles/Home.module.css";
import getDate from "./date";
import handleBackgroundChange from "./background";

const fetchData = async ({ URL, apiKey }, query, setData) => {
  await fetch(`${URL}weather?q=${query}&units=metric&appid=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (typeof data.name != "undefined") {
        setData(data);
      } else {
        alert(`cannot get: ${query}`);
        console.log("API error");
      }
    });
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const api = {
    apiKey: "f627f629ce8f30bb3f8973de28703ece",
    URL: "https://api.openweathermap.org/data/2.5/",
  };

  const weatherStyle = {
    backgroundImage: `${handleBackgroundChange(data)}`,
  };

  const handleSubmit = ({ key }) => {
    if (key === "Enter") {
      fetchData(api, query, setData);
      if (typeof data.main == "undefined") {
      }
      setQuery("");
    }
  };

  return (
    <div>
      <div className={styles.container} style={weatherStyle}>
        <div className={styles["search-wrapper"]}>
          <input
            className={styles.input}
            type="text"
            className={styles["search-bar"]}
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={handleSubmit}
          />
        </div>
        <div className={styles["weather-wrapper"]}>
          {typeof data.main != "undefined" ? (
            <div className={styles["weather-box"]}>
              <div className={styles["city-name"]}>
                {data.name}, {data.sys.country}
              </div>
              <div className={styles["current-date"]}>
                {getDate(new Date())}
              </div>
              <div className={styles["temp-box"]}>
                <div className={styles["city-temp"]}>
                  {data.main.temp.toFixed(1)}
                </div>
                <div className={styles["side-temp-wrapper"]}>
                  <div className={styles["celsius"]}>° C</div>
                  <div className={styles["higher-temp"]}>
                    ↑ {data.main.temp_max.toFixed(1)}°
                  </div>
                  <div className={styles["lower-temp"]}>
                    ↓ {data.main.temp_min.toFixed(1)}°
                  </div>
                </div>
              </div>

              <div className={styles["icon-wrapper"]}>
                <div>{data.weather[0].description}</div>
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                />
              </div>
            </div>
          ) : (
            <div className={styles["weather-box"]}>
              Type the city name above and click "Enter"
            </div>
          
          )}
        </div>
        <footer className={styles.footer}>
          2021 | Adam Kudłacik | Check my other projects →&nbsp;
          <a href="https://github.com/Adask023?tab=repositories">
            GitHub <i class="fab fa-github"></i>
          </a>
        </footer>
      </div>
    </div>
  );
}
