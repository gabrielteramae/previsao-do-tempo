# Previsão do Tempo — clima via Open-Meteo

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Busca uma cidade, mostra o clima atual, as próximas horas, os dias seguintes e o nascer/pôr do sol. A primeira carga pede São Paulo. O `index.html` aponta o canonical para [gabrielteramae.github.io/previsao-do-tempo](https://gabrielteramae.github.io/previsao-do-tempo/).

| Escolha | Motivo |
| --- | --- |
| Open-Meteo no navegador | Geocoding e forecast públicos, sem chave e sem backend |

## Stack

- React 18.3 e Vite 5
- CSS em `src/index.css`, sem biblioteca de UI
- `https://geocoding-api.open-meteo.com` e `https://api.open-meteo.com/v1/forecast`

## Estrutura

```
index.html
vite.config.js
package.json
src/main.jsx
src/App.jsx
src/index.css
src/components/SearchBar.jsx
src/components/CurrentHero.jsx
src/components/HourlyStrip.jsx
src/components/DailyForecast.jsx
src/components/SunMoon.jsx
src/components/WeatherIcon.jsx
src/lib/weatherCodes.js
public/
```

## Como rodar

```bash
git clone https://github.com/gabrielteramae/previsao-do-tempo.git
cd previsao-do-tempo
npm install
npm run dev
```

Abra http://localhost:5173. `npm run build` gera `dist/`. `npm run preview` serve esse build.

---

© 2026 Gabriel Teramae Chan
