import { useState } from "react";
import xiannaImage from "../assets/images/njeri.jpeg";

const links = [
  { label: "Welcome", id: "welcome" },
  { label: "Our Story", id: "timeline" },
  { label: "Why You", id: "reasons" },
  { label: "Surprise", id: "surprise" },
  { label: "Song", id: "song" },
  { label: "For You", id: "final" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <nav className={`love-nav ${open ? "open" : ""}`}>

      <button
        className="nav-logo"
        onClick={() => scrollToSection("welcome")}
        aria-label="Go to welcome section"
      >
        <img
          src={xiannaImage}
          alt="Xianna"
        />
      </button>

      {/* rest of navbar */}

      <div className="nav-links">

        {links.map((link) => (
          <button
            key={link.id}
            onClick={() =>
              scrollToSection(link.id)
            }
          >
            {link.label}
          </button>
        ))}

      </div>

      <button
        className="nav-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
      </button>

    </nav>
  );
}

export default Navbar;