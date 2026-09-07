import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Reasons from "./components/Reasons";
import Surprise from "./components/Surprise";
import MusicPlayer from "./components/MusicPlayer";
import FinalMessage from "./components/FinalMessage";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="love-page">

      {!opened ? (

        <section className="hero">

          <div className="hero-orb hero-orb-one"></div>
          <div className="hero-orb hero-orb-two"></div>

          <div className="hero-content">

            <div className="hero-symbol">
              ✦
            </div>

            <p className="eyebrow">
              A little world for you
            </p>

            <h1>
              Xianna
            </h1>

            <p className="hero-description">
              This little corner of the internet
              I made just for you Mamaa. ♡
            </p>

            <button
              className="heart-button"
              onClick={() => setOpened(true)}
            >
              <span>Enter My Heart</span>
              <span>→</span>
            </button>

            <p className="signature">
              with love, Meshack
            </p>

          </div>

          <div className="hero-scroll">
            <span></span>
            <p>something special awaits</p>
          </div>

        </section>

      ) : (
        <>
        <Navbar />
          <section className="welcome-section" id="welcome">

  <div className="welcome-glow"></div>

  <div className="welcome-content">

    <p className="eyebrow">
      Welcome, Xianna ❤️
    </p>

    <h2>
      This is
      <span>your little world.</span>
    </h2>

    <div className="welcome-divider">
      <span>♡</span>
    </div>

    <p className="welcome-text">
      Njeri, I wanted to create something that
      wasn't just another gift.

      Something you could open whenever you wanted
      and remember just how special you are to me.
    </p>

    <p className="welcome-text">
      So I made this little place for you.

      A place for your story, your smile,
      the things I love about you,
      and eventually all the memories
      we'll create together.
    </p>

    <p className="welcome-signature">
      Yours,
      <strong>Meshack</strong>
    </p>

    <button
      className="continue-button"
      onClick={() =>
        document
          .getElementById("timeline")
          ?.scrollIntoView({
            behavior: "smooth",
          })
      }
    >
      Discover your story
      <span>→</span>
    </button>

  </div>

</section>

          
          <Timeline />
          <Reasons />
          <Surprise />
          <MusicPlayer />
          <FinalMessage />
        </>
      )}

    </main>
  );
}

export default App;