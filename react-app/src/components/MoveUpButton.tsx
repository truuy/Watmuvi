import React, { useEffect, useState } from "react";

const MoveUpButton: React.FC<{ darkMode?: boolean }> = ({ darkMode }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={handleClick}
      className="move-up-btn"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 3000,
        border: "none",
        borderRadius: "50%",
        width: 48,
        height: 48,
        background: darkMode ? "#fff" : "#222", // white for dark mode, black for light mode
        color: darkMode ? "#222" : "#fff", // black arrow for dark mode, white for light mode
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        fontSize: 24,
        cursor: "pointer",
        transition: "background 0.2s",
      }}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  ) : null;
};

export default MoveUpButton;
