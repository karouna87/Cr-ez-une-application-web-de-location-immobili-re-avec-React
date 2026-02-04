import { useState } from "react";
import arrow from "/images/arrow.svg";

function Collapse({ title, content }) {
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
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Collapse;

