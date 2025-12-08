import { useEffect, useRef } from "react";

const CursorGlow = (): JSX.Element => {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = glowRef.current;
      if (!el) return;

      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" />;
};

export default CursorGlow;
