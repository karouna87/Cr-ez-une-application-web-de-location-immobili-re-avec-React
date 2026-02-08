import { useState } from "react";
import arrow from "/images/arrow.svg";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div
        className="collapse-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <img
          src={arrow}
          alt="ouvrir"
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
        />
      </div>

      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
