import { useState } from "react";

function FinalMessage() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section
      className="final-section"
      id="final"
    >
      <div className="final-glow"></div>

      {!revealed ? (
        <div className="final-intro">

          <p className="eyebrow">
            Before you go... ❤️
          </p>

          <h2>
            Xianna,
            <span>one more thing.</span>
          </h2>

          <p className="final-subtitle">
            Everything you've seen so far is only
            a small part of what I wanted to tell you.
          </p>

          <button
            className="final-reveal-button"
            onClick={() => setRevealed(true)}
          >
            <span>Read my heart</span>
            <span>♡</span>
          </button>

        </div>
      ) : (
        <div className="final-message">

          <div className="final-heart">
            ❤️
          </div>

          <p className="final-small">
            My dearest Xianna,
          </p>

          <h2>
            If I had to
            <span>choose again...</span>
          </h2>

          <p className="final-text">
            I would still choose you.
          </p>

          <p className="final-text">
            From Instagram reels in 2024,
            to the moments we have shared,
            to everything that has brought us
            here today...
          </p>

          <p className="final-text">
            Somewhere along the way,
            you became someone incredibly
            special to me.
          </p>

          <p className="final-text emphasis">
            You are a gift, Njeri.
          </p>

          <p className="final-text">
            And I hope you always know how
            much you mean to me.
          </p>

          <div className="final-divider">
            <span>♡</span>
          </div>

          <p className="forever">
            This is only another chapter.
          </p>

          <p className="final-signature">
            With all my love,
            <strong>Meshack</strong>
          </p>

          <div className="floating-hearts">
            <span>❤️</span>
            <span>♡</span>
            <span>❤️</span>
            <span>♡</span>
            <span>❤️</span>
          </div>

        </div>
      )}

    </section>
  );
}

export default FinalMessage;