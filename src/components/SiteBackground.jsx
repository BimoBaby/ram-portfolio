import { useEffect, useMemo, useRef, useState } from "react";

function createParticles(count) {
  return Array.from({ length: count }, (_, i) => {
    const seed = i * 9973;
    const rand = (n) => {
      const x = Math.sin(seed + n) * 10000;
      return x - Math.floor(x);
    };
    return {
      id: i,
      size: 1 + rand(1) * 2,
      color: rand(2) > 0.5 ? "#00CC66" : "#0099CC",
      left: rand(3) * 100,
      top: rand(4) * 100,
      duration: 15 + rand(5) * 20,
      delay: rand(6) * 5,
      glow: 3 + rand(7) * 6,
    };
  });
}

export function SiteBackground() {
  const bgRef = useRef(null);
  const [particleCount, setParticleCount] = useState(50);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const sync = () => setParticleCount(mq.matches ? 18 : 50);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const particles = useMemo(
    () => createParticles(particleCount),
    [particleCount]
  );

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    const onMove = (e) => {
      if (!bgRef.current) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      bgRef.current.style.transform = `translate(${x * -14}px, ${y * -14}px) scale(1.06)`;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        ref={bgRef}
        className="absolute inset-[-6%] transition-transform duration-300 ease-out will-change-transform"
      >
        <img
          src="/ram-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
      </div>

      <div className="hero-aurora absolute inset-0">
        <div className="hero-aurora-orb hero-aurora-orb-a" />
        <div className="hero-aurora-orb hero-aurora-orb-b" />
        <div className="hero-aurora-orb hero-aurora-orb-c" />
        <div className="hero-aurora-sweep" />

        <svg
          className="hero-electric absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="electric-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="0.35" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            className="hero-bolt hero-bolt-1"
            d="M8,18 L18,32 L14,34 L28,58 L22,56 L38,82"
            fill="none"
            stroke="#00CC66"
            strokeWidth="0.35"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#electric-glow)"
          />
          <path
            className="hero-bolt hero-bolt-2"
            d="M72,12 L64,28 L70,30 L58,52 L64,50 L48,78"
            fill="none"
            stroke="#0099CC"
            strokeWidth="0.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#electric-glow)"
          />
          <path
            className="hero-bolt hero-bolt-3"
            d="M42,8 L48,24 L44,26 L55,48 L50,46 L62,70"
            fill="none"
            stroke="#00BFB0"
            strokeWidth="0.28"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#electric-glow)"
          />
          <path
            className="hero-bolt hero-bolt-4 hero-bolt-desktop"
            d="M88,40 L76,48 L80,52 L66,66 L70,64 L54,88"
            fill="none"
            stroke="#00CC66"
            strokeWidth="0.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#electric-glow)"
          />
          <path
            className="hero-bolt hero-bolt-5 hero-bolt-desktop"
            d="M20,55 L32,62 L28,66 L44,78 L38,76 L52,92"
            fill="none"
            stroke="#0099CC"
            strokeWidth="0.22"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#electric-glow)"
          />
        </svg>

        <div className="hero-electric-flash" />
      </div>

      <div className="absolute inset-0 overflow-hidden site-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full opacity-70"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.glow}px ${p.color}`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              animation: `slow-drift ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/55 to-background/80" />
    </div>
  );
}
