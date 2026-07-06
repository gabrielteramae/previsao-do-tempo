export const weatherCodes = {
  0: { label: "Céu limpo", mood: "clear", icon: "sun" },
  1: { label: "Predominantemente limpo", mood: "clear", icon: "sun" },
  2: { label: "Parcialmente nublado", mood: "cloudy", icon: "cloud-sun" },
  3: { label: "Nublado", mood: "cloudy", icon: "cloud" },
  45: { label: "Nevoeiro", mood: "fog", icon: "fog" },
  48: { label: "Nevoeiro com geada", mood: "fog", icon: "fog" },
  51: { label: "Garoa leve", mood: "rain", icon: "drizzle" },
  53: { label: "Garoa moderada", mood: "rain", icon: "drizzle" },
  55: { label: "Garoa densa", mood: "rain", icon: "drizzle" },
  56: { label: "Garoa congelante leve", mood: "rain", icon: "drizzle" },
  57: { label: "Garoa congelante densa", mood: "rain", icon: "drizzle" },
  61: { label: "Chuva leve", mood: "rain", icon: "rain" },
  63: { label: "Chuva moderada", mood: "rain", icon: "rain" },
  65: { label: "Chuva forte", mood: "rain", icon: "rain" },
  66: { label: "Chuva congelante leve", mood: "rain", icon: "rain" },
  67: { label: "Chuva congelante forte", mood: "rain", icon: "rain" },
  71: { label: "Neve leve", mood: "snow", icon: "snow" },
  73: { label: "Neve moderada", mood: "snow", icon: "snow" },
  75: { label: "Neve forte", mood: "snow", icon: "snow" },
  77: { label: "Grãos de neve", mood: "snow", icon: "snow" },
  80: { label: "Pancadas de chuva leves", mood: "rain", icon: "rain" },
  81: { label: "Pancadas de chuva moderadas", mood: "rain", icon: "rain" },
  82: { label: "Pancadas de chuva fortes", mood: "storm", icon: "rain" },
  85: { label: "Pancadas de neve leves", mood: "snow", icon: "snow" },
  86: { label: "Pancadas de neve fortes", mood: "snow", icon: "snow" },
  95: { label: "Trovoada", mood: "storm", icon: "storm" },
  96: { label: "Trovoada com granizo leve", mood: "storm", icon: "storm" },
  99: { label: "Trovoada com granizo forte", mood: "storm", icon: "storm" },
};

export function getWeatherInfo(code) {
  return weatherCodes[code] || { label: "Desconhecido", mood: "clear", icon: "sun" };
}

export const moodGradients = {
  clear: {
    day: ["#ffb56b", "#ff8b6b", "#5b8def"],
    night: ["#0b1130", "#1c2456", "#3a3f7a"],
  },
  cloudy: {
    day: ["#c9d3de", "#9fb0c3", "#5b6b82"],
    night: ["#1a1f2b", "#2c3446", "#404a5e"],
  },
  rain: {
    day: ["#5c6b7a", "#3f4f60", "#28303b"],
    night: ["#12161e", "#1e2733", "#2b3644"],
  },
  storm: {
    day: ["#3a3f4d", "#262a35", "#14161c"],
    night: ["#0a0a10", "#1a1a22", "#26262f"],
  },
  snow: {
    day: ["#e8edf2", "#c3d2de", "#8ea3b8"],
    night: ["#1b2230", "#2e3648", "#454f63"],
  },
  fog: {
    day: ["#cfd4d8", "#a9b0b6", "#7d838a"],
    night: ["#232830", "#333a44", "#454d58"],
  },
};

export function isNight(hour) {
  return hour < 6 || hour >= 18;
}
