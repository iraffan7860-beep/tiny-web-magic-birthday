import { useEffect, useState } from "react";

const decorations = [
  "🌸", "🌷", "🌼", "🌺", "✨",
  "💖", "💕", "✦", "❀", "⭐", "🦋"
];

function CelebrationEffect({ trigger }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!trigger) return;

    const burst = Array.from({ length: 45 }, (_, index) => ({
      id: `${trigger}-${index}`,
      symbol:
        decorations[Math.floor(Math.random() * decorations.length)],
      left: Math.random() * 100,
      delay: Math.random() * 0.8,
      duration: 2.5 + Math.random() * 2,
      size: 14 + Math.random() * 20,
      drift: (Math.random() - 0.5) * 220
    }));

    setParticles(burst);

    const timer = setTimeout(() => {
      setParticles([]);
    }, 5000);

    return () => clearTimeout(timer);
  }, [trigger]);

  return (
    <div className="celebration-layer" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="celebration-particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            fontSize: `${particle.size}px`,
            "--drift": `${particle.drift}px`
          }}
        >
          {particle.symbol}
        </span>
      ))}
    </div>
  );
}

export default CelebrationEffect;