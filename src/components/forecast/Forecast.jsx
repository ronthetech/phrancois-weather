import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styles from "./Forecast.module.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className={styles.title}>Daily Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={styles.daily_item}>
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    className={styles.icon_small}
                    alt="weather"
                  />
                  <label className={styles.day}>{forecastDays[idx]}</label>
                  <label className={styles.description}>
                    {item.weather[0].description}
                  </label>
                  <label className={styles.min_max}>
                    {Math.round(item.main.temp_max)}°C /
                    {Math.round(item.main.temp_min)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={styles.daily_details_grid}>
                <div className={styles.daily_details_grid_item}>
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
                <div className={styles.daily_details_grid_item}>
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className={styles.daily_details_grid_item}>
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className={styles.daily_details_grid_item}>
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className={styles.daily_details_grid_item}>
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className={styles.daily_details_grid_item}>
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
