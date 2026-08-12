import { useRef } from "react";

export function SpotlightCard({
  children,
  className = "",
  as: Tag = "div",
  ...props
}) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--spot-x", `${x}px`);
    el.style.setProperty("--spot-y", `${y}px`);
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight-card ${Tag === "a" ? "block no-underline text-inherit" : ""} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
