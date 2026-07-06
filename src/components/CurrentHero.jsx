import WeatherIcon from "./WeatherIcon";
import { getWeatherInfo, moodGradients, isNight } from "../lib/weatherCodes";

export default function CurrentHero({ location, current }) {
  const code = current.weather_code;
  const info = getWeatherInfo(code);
  const night = current.is_day === 0;
  const stops = moodGradients[info.mood][night ? "night" : "day"];
  const background = `linear-gradient(160deg, ${stops[0]} 0%, ${stops[1]} 55%, ${stops[2]} 100%)`;

  return (
    <section className="hero" style={{ background }}>
      <div className="hero-content">
        <p className="hero-location">
          {location.region ? `${location.region}, ` : ""}
          {location.country}
        </p>
        <h1 className="hero-city">{location.name}</h1>
        <div className="hero-temp-row">
          <span className="hero-temp">{Math.round(current.temperature_2m)}°</span>
          <WeatherIcon icon={info.icon} isDay={!night} className="hero-icon" />
        </div>
        <p className="hero-condition">{info.label}</p>
        <div className="hero-stats">
          <div>
            <strong>{Math.round(current.apparent_temperature)}°</strong>
            Sensação
          </div>
          <div>
            <strong>{current.relative_humidity_2m}%</strong>
            Umidade
          </div>
          <div>
            <strong>{Math.round(current.wind_speed_10m)} km/h</strong>
            Vento
          </div>
        </div>
      </div>
    </section>
  );
}
