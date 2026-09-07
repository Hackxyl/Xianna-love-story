import { useEffect, useRef, useState } from "react";
import songFile from "../assets/music/our-song.mp3";

const song = {
  title: "This song is a special dedication to you, my love.",
  artist: "For Xianna ❤️",
  message:
    "Some songs are just songs. But this one will always remind me of you, the moments we've shared, and everything I feel when I'm with you.",
};

function formatTime(time) {
  if (!time || Number.isNaN(time)) {
    return "0:00";
  }

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function MusicPlayer() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const updateDuration = () => {
      if (Number.isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener(
        "loadedmetadata",
        updateDuration
      );
      audio.removeEventListener(
        "durationchange",
        updateDuration
      );
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Unable to play audio:", error);
    }
  };

  const handleProgress = (event) => {
    const audio = audioRef.current;

    if (!audio || !duration) return;

    const newTime =
      (Number(event.target.value) / 100) * duration;

    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progress = duration
    ? (currentTime / duration) * 100
    : 0;

  return (
    <section
      className="music-section"
      id="song"
    >

      <div className="section-heading">

        <p className="eyebrow">
          Press play 🎧
        </p>

        <h2>
          A Song
          <span>For Xianna</span>
        </h2>

        <p>
          Some feelings are easier to hear
          than they are to say.
        </p>

      </div>

      <div className="music-player">

        <audio
          ref={audioRef}
          src={songFile}
          preload="metadata"
        />

        <div
          className={`album-art ${
            isPlaying ? "playing" : ""
          }`}
        >
          <div className="album-glow"></div>

          <div className="album-heart">
            {isPlaying ? "💗" : "❤️"}
          </div>

          <span>
            For Xianna
          </span>
        </div>

        <div className="music-info">

          <span className="music-label">
            A LITTLE SONG FOR YOU
          </span>

          <h3>
            {song.title}
          </h3>

          <p className="music-artist">
            {song.artist}
          </p>

          <p className="music-message">
            "{song.message}"
          </p>

        </div>

        <div className="music-controls">

          <button
            className="play-button"
            onClick={togglePlay}
            aria-label={
              isPlaying
                ? "Pause song"
                : "Play song"
            }
          >
            {isPlaying ? "Ⅱ" : "▶"}
          </button>

          <div className="progress-container">

            <span>
              {formatTime(currentTime)}
            </span>

            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgress}
              className="progress-bar"
              style={{
                background: `linear-gradient(
                  to right,
                  #ff668d ${progress}%,
                  rgba(255,255,255,0.1) ${progress}%
                )`,
              }}
            />

            <span>
              {formatTime(duration)}
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MusicPlayer;