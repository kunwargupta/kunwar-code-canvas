import { useEffect, useState } from "react";

export const SnakeAnimation = () => {
  const [position, setPosition] = useState({ x: -60, y: 20 });
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    let animFrame: number;
    let startTime = Date.now();
    const cycleDuration = 6000; // 6 seconds per cycle

    const animate = () => {
      const elapsed = (Date.now() - startTime) % (cycleDuration * 2);
      const t = elapsed / cycleDuration;

      if (t < 1) {
        // Moving right across the name
        setDirection("right");
        setVisible(true);
        const x = -60 + t * 420;
        const y = 20 + Math.sin(t * Math.PI * 4) * 12;
        setPosition({ x, y });
        setPhase(t * Math.PI * 8);
      } else {
        // Moving left back
        const t2 = t - 1;
        setDirection("left");
        setVisible(true);
        const x = 360 - t2 * 420;
        const y = -15 + Math.sin(t2 * Math.PI * 4) * 12;
        setPosition({ x, y });
        setPhase(t2 * Math.PI * 8);
      }

      animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  if (!visible) return null;

  const scaleX = direction === "left" ? -1 : 1;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 10,
        transform: `scaleX(${scaleX})`,
      }}
    >
      <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
        {/* Snake body - sinuous path */}
        <path
          d={`M 5 15 
              Q 12 ${8 + Math.sin(phase) * 5}, 20 15 
              Q 28 ${22 - Math.sin(phase) * 5}, 36 15 
              Q 44 ${8 + Math.sin(phase) * 5}, 50 15`}
          stroke="hsl(120, 60%, 35%)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Snake body pattern overlay */}
        <path
          d={`M 5 15 
              Q 12 ${8 + Math.sin(phase) * 5}, 20 15 
              Q 28 ${22 - Math.sin(phase) * 5}, 36 15 
              Q 44 ${8 + Math.sin(phase) * 5}, 50 15`}
          stroke="hsl(100, 50%, 45%)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="3 4"
          fill="none"
        />
        {/* Snake head */}
        <ellipse
          cx="54"
          cy="15"
          rx="6"
          ry="4.5"
          fill="hsl(120, 60%, 35%)"
        />
        {/* Eye */}
        <circle cx="56" cy="13.5" r="1.2" fill="hsl(50, 90%, 50%)" />
        <circle cx="56" cy="13.5" r="0.5" fill="black" />
        {/* Tongue */}
        <path
          d={`M 59 15 L 63 ${13 + Math.sin(phase * 3) * 2} M 63 ${13 + Math.sin(phase * 3) * 2} L 65 ${11 + Math.sin(phase * 3) * 2} M 63 ${13 + Math.sin(phase * 3) * 2} L 65 ${15 + Math.sin(phase * 3) * 2}`}
          stroke="hsl(0, 80%, 50%)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        {/* Tail taper */}
        <path
          d={`M 5 15 Q 2 ${15 + Math.sin(phase + 1) * 3}, 0 ${14 + Math.sin(phase + 1) * 4}`}
          stroke="hsl(120, 60%, 35%)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
};
