# Previsão do Tempo
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

Aplicação web para consulta de previsão do tempo em tempo real de qualquer cidade.

## Sobre

Uma página construída com **React** e **Vite**, consumindo diretamente do navegador a API gratuita do [Open-Meteo](https://open-meteo.com/) (geocoding + forecast), sem necessidade de backend ou API key. O layout é inspirado na estrutura de páginas de previsão como a da AccuWeather (clima atual, previsão por hora, 7 dias e nascer/pôr do sol), com uma identidade visual própria: um fundo em gradiente que muda de cor de acordo com a condição climática e o horário do dia.

## Funcionalidades

- Busca de previsão por nome da cidade
- Temperatura atual, sensação térmica, umidade e vento
- Previsão para as próximas 12 horas
- Previsão estendida de 7 dias
- Horário de nascer e pôr do sol, com indicador de posição atual
- Gradiente de fundo dinâmico conforme o clima e o período do dia (dia/noite)
- Design responsivo, do mobile ao desktop

## Stack

- **Frontend:** React 18, Vite 5, CSS puro (sem bibliotecas de UI)
- **Dados:** API pública do Open-Meteo (geocoding + forecast), consumida direto do client

---

## Como rodar localmente

**Pré-requisitos:** Node.js 18+ instalado.

```bash
npm install
npm run dev
```

Acesse http://localhost:5173

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/`, pronta pra hospedar em qualquer serviço estático (GitHub Pages, Vercel, Netlify etc.), sem precisar de servidor rodando.
