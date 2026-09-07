const moments = [
  {
    date: "The Beginning",
    year: "2024",
    title: "It all started with Instagram reels",
    description:
      "Every story has a beginning. Ours started with something as simple as Instagram reels, and I had no idea then just how special this journey would become.",
    icon: "♡",
  },
  {
    date: "Our First Memory",
    year: "2025",
    title: "Giving you a special gift on your birthday",
    description:
      "One of those moments that seemed simple at the time, but became a memory I will always want to keep. Thank you for trusting me. I hope you enjoyed it as much as I did.",
    icon: "✦",
  },
  {
    date: "Getting Closer",
    year: "2025",
    title: "You became someone special",
    description:
      "As we spent more time together, I realized just how much you meant to me. You became someone I couldn't imagine my life without. You are a GIFT, and I love you.",
    icon: "∞",
  },
  {
    date: "Today",
    year: "2026",
    title: "And here we are",
    description:
      "Our story is still being written. And honestly, I wouldn't want to write it with anyone else.",
    icon: "❤️",
  },
];

function Timeline() {
  return (
    <section
      className="timeline-section"
      id="timeline"
    >

      <div className="section-heading">

        <p className="eyebrow">
          A journey worth remembering 🕰️
        </p>

        <h2>
          Our
          <span>Story</span>
        </h2>

        <p>
          From the first reel to everything
          that brought us here.
        </p>

      </div>

      <div className="timeline">

        {moments.map((moment, index) => (

          <article
            className={`timeline-item ${
              index % 2 === 0
                ? "left"
                : "right"
            }`}
            key={index}
          >

            <div className="timeline-dot">
              {moment.icon}
            </div>

            <div className="timeline-card">

              <span className="timeline-year">
                {moment.year}
              </span>

              <span className="timeline-date">
                {moment.date}
              </span>

              <h3>
                {moment.title}
              </h3>

              <p>
                {moment.description}
              </p>

            </div>

          </article>

        ))}

      </div>

      <div className="timeline-ending">

        <span>♡</span>

        <p>
          And the best part?
          <strong>
            We're still writing it.
          </strong>
        </p>

      </div>

    </section>
  );
}

export default Timeline;