import { useState } from "react";

const surprises = [
  {
    number: "01",
    icon: "💌",
    title: "A little reminder",
    message:
      "Njeri, I hope you always remember that you are deeply appreciated, deeply valued, and very special to me.",
  },
  {
    number: "02",
    icon: "✨",
    title: "Something I hope for",
    message:
      "I hope we keep growing together, laughing together, supporting each other, and creating moments that we'll look back on with a smile.",
  },
  {
    number: "03",
    icon: "🎁",
    title: "The best gift",
    message:
      "I thought I was giving you a gift on your birthday, but somewhere along the way, I realized that having you in my life was the real gift.",
  },
];

function Surprise() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section
      className="surprise-section"
      id="surprise"
    >
      <div className="section-heading">

        <p className="eyebrow">
          Just between us 🤫
        </p>

        <h2>
          A Little
          <span>Surprise</span>
        </h2>

        <p>
          Three little things I wanted
          you to discover yourself.
        </p>

      </div>

      <div className="surprise-grid">

        {surprises.map((surprise, index) => {

          const isOpen = activeCard === index;

          return (
            <button
              className={`surprise-card ${
                isOpen ? "open" : ""
              }`}
              key={index}
              onClick={() =>
                setActiveCard(
                  isOpen ? null : index
                )
              }
              aria-label={
                isOpen
                  ? `Close ${surprise.title}`
                  : `Reveal ${surprise.title}`
              }
            >

              {!isOpen ? (
                <>

                  <span className="surprise-number">
                    {surprise.number}
                  </span>

                  <span className="surprise-question">
                    ?
                  </span>

                  <span className="surprise-hint">
                    Tap to reveal
                  </span>

                </>
              ) : (
                <div className="surprise-content">

                  <span className="surprise-icon">
                    {surprise.icon}
                  </span>

                  <h3>
                    {surprise.title}
                  </h3>

                  <p>
                    {surprise.message}
                  </p>

                  <span className="close-hint">
                    Tap to close
                  </span>

                </div>
              )}

            </button>
          );
        })}

      </div>

    </section>
  );
}

export default Surprise;