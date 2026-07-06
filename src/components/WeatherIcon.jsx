export default function WeatherIcon({ icon, isDay = true, className }) {
  const stroke = "currentColor";
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
  };

  switch (icon) {
    case "sun":
      return isDay ? (
        <svg {...common}>
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
        </svg>
      ) : (
        <svg {...common}>
          <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common}>
          <path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 11.1 3.5 3.5 0 0 0 7 18Z" />
        </svg>
      );
    case "cloud-sun":
      return (
        <svg {...common}>
          <path d="M9 8.5a4 4 0 0 1 3.8 2.72" />
          <circle cx="9" cy="8" r="2.6" />
          <path d="M8 17h9a3.5 3.5 0 0 0 .4-6.98A4.8 4.8 0 0 0 8.9 10.9 3 3 0 0 0 8 17Z" />
        </svg>
      );
    case "fog":
      return (
        <svg {...common}>
          <path d="M4 9h13M4 13h16M4 17h11" />
        </svg>
      );
    case "drizzle":
      return (
        <svg {...common}>
          <path d="M7 15h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 8.1 3.5 3.5 0 0 0 7 15Z" />
          <path d="M9 19v1.5M13 19v1.5M17 19v1.5" />
        </svg>
      );
    case "rain":
      return (
        <svg {...common}>
          <path d="M7 14h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 7.1 3.5 3.5 0 0 0 7 14Z" />
          <path d="M8 18l-1.5 3M13 18l-1.5 3M18 18l-1.5 3" />
        </svg>
      );
    case "snow":
      return (
        <svg {...common}>
          <path d="M7 14h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 7.1 3.5 3.5 0 0 0 7 14Z" />
          <path d="M8 18v3M8 18l-1.5 1M8 18l1.5 1M13 18v3M13 18l-1.5 1M13 18l1.5 1M18 18v3M18 18l-1.5 1M18 18l1.5 1" />
        </svg>
      );
    case "storm":
      return (
        <svg {...common}>
          <path d="M7 12h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 5.1 3.5 3.5 0 0 0 7 12Z" />
          <path d="M13 14l-3 5h3l-2 4" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4.5" />
        </svg>
      );
  }
}
