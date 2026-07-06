import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CurrentHero from "./components/CurrentHero";
import HourlyStrip from "./components/HourlyStrip";
import DailyForecast from "./components/DailyForecast";
import SunMoon from "./components/SunMoon";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchWeather(city) {
    setLoading(true);
    setError(null);
    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=1&language=pt&format=json`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError("Cidade não encontrada");
        setData(null);
        return;
      }

      const { latitude, longitude, name, admin1, country } = geoData.results[0];

      const forecastRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
          `&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day` +
          `&hourly=temperature_2m,weather_code,precipitation_probability` +
          `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset` +
          `&timezone=auto&forecast_days=8`
      );
      const forecastData = await forecastRes.json();

      setData({
        location: { name, region: admin1 || "", country },
        current: forecastData.current,
        hourly: forecastData.hourly,
        daily: forecastData.daily,
      });
    } catch (err) {
      setError("Não foi possível conectar à API de clima");
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather("São Paulo");
  }, []);

  return (
    <div className="app">
      <header className="topbar">
        <p className="brand">
          previsão<span>.</span>
        </p>
        <SearchBar onSearch={fetchWeather} loading={loading} />
      </header>

      {error && <div className="error-banner">{error}</div>}

      {data ? (
        <>
          <CurrentHero location={data.location} current={data.current} />
          <HourlyStrip hourly={data.hourly} currentTime={data.current.time} />
          <DailyForecast daily={data.daily} />
          <SunMoon
            sunrise={data.daily.sunrise[0]}
            sunset={data.daily.sunset[0]}
            currentTime={data.current.time}
          />
        </>
      ) : (
        !error && (
          <div className="empty-state">
            <h1>Carregando previsão...</h1>
          </div>
        )
      )}

      <footer className="footer">
        <p>Dados fornecidos por Open-Meteo</p>
        <p className="footer-copyright">© 2026 Gabriel Teramae Chan. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
