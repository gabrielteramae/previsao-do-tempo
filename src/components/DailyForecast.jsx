import WeatherIcon from "./WeatherIcon";
import { getWeatherInfo } from "../lib/weatherCodes";

export default function DailyForecast({ daily }) {
  return (
    <section className="section">
      <h2 className="section-title">Previsão de 7 dias</h2>
      <div className="daily-list">
        {daily.time.map((date, i) => {
          const info = getWeatherInfo(daily.weather_code[i]);
          const d = new Date(`${date}T12:00:00`);
          const dayLabel = i === 0 ? "Hoje" : d.toLocaleDateString("pt-BR", { weekday: "short" });
          const dateLabel = d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });

          return (
            <div className="daily-row" key={date}>
              <div className="daily-day">
                {dayLabel}
                <span className="daily-date">{dateLabel}</span>
              </div>
              <div className="daily-condition">
                <WeatherIcon icon={info.icon} isDay={true} className="daily-icon" />
                {info.label}
              </div>
              <div className="daily-temps">
                <span className="daily-min">{Math.round(daily.temperature_2m_min[i])}°</span>
                <span className="temp-bar" />
                <span className="daily-max">{Math.round(daily.temperature_2m_max[i])}°</span>
              </div>
              <div className="daily-rain">{daily.precipitation_probability_max[i]}% chuva</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
