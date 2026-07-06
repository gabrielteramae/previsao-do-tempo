# previsão.

Página de previsão do tempo em React (Vite), consumindo direto do navegador a API gratuita do [Open-Meteo](https://open-meteo.com/) (sem API key, sem backend).

Layout inspirado na estrutura da AccuWeather (atual, hora-a-hora, 7 dias, nascer/pôr do sol), com identidade visual própria: fundo em gradiente que muda de cor conforme o clima atual e o horário do dia.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção (página estática)

```bash
npm run build
```

Gera a pasta `dist/` pronta pra hospedar em qualquer lugar (GitHub Pages, Vercel, Netlify etc.), sem precisar de servidor Node rodando.

## Stack

- React 18 + Vite
- Sem backend: chamadas diretas ao Open-Meteo (geocoding + forecast) direto do client
- CSS puro, sem bibliotecas de UI
