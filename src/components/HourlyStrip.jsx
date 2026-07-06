import WeatherIcon from "./WeatherIcon";
import { getWeatherInfo } from "../lib/weatherCodes";

export default function HourlyStrip({ hourly, currentTime }) {
  const startIndex = Math.max(
    0,
    hourly.time.findIndex((t) => t >= currentTime)
  );
  const slice = hourly.time.slice(startIndex, startIndex + 12);

  return (
    <section className="section">
      <h2 className="section-title">Próximas horas</h2>
      <div className="hourly-strip">
        {slice.map((time, i) => {
          const idx = startIndex + i;
          const hour = new Date(time).getHours();
          const info = getWeatherInfo(hourly.weather_code[idx]);
          return (
            <div className="hourly-card" key={time}>
              <p className="hourly-time">{i === 0 ? "Agora" : `${hour}h`}</p>
              <WeatherIcon icon={info.icon} isDay={hour >= 6 && hour < 18} className="hourly-icon" />
              <p className="hourly-temp">{Math.round(hourly.temperature_2m[idx])}°</p>
              <p className="hourly-rain">{hourly.precipitation_probability[idx]}%</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
