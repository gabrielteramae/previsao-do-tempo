export default function SunMoon({ sunrise, sunset, currentTime }) {
  const rise = new Date(sunrise).getTime();
  const set = new Date(sunset).getTime();
  const now = new Date(currentTime).getTime();
  const progress = Math.min(1, Math.max(0, (now - rise) / (set - rise)));

  const cx = 20 + progress * 160;
  const cy = 95 - Math.sin(progress * Math.PI) * 75;

  const riseLabel = new Date(sunrise).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  const setLabel = new Date(sunset).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

  return (
    <section className="section">
      <h2 className="section-title">Sol</h2>
      <div className="sun-card">
        <svg className="sun-arc" viewBox="0 0 200 110">
          <path
            d="M20 95 Q100 -10 180 95"
            fill="none"
            stroke="var(--borda)"
            strokeWidth="1.5"
          />
          <circle cx={cx} cy={cy} r="7" fill="var(--ambar)" />
        </svg>
        <div className="sun-times">
          <div>
            <p className="sun-time-label">Nascer do sol</p>
            <p className="sun-time-value">{riseLabel}</p>
          </div>
          <div>
            <p className="sun-time-label">Pôr do sol</p>
            <p className="sun-time-value">{setLabel}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
