const memories = [
  {
    date: "The Beginning",
    title: "Where it all started",
    description:
      "Every beautiful story has a moment when two people become something more.",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=900&q=80",
  },
  {
    date: "A Special Moment",
    title: "One of my favorite memories",
    description:
      "Some moments may seem small, but they become unforgettable because of who you share them with.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    date: "Together",
    title: "The moments in between",
    description:
      "The laughs, the conversations, the random little moments — I treasure them all.",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
  },
];

function Memories() {
  return (
    <section className="memories" id="memories">

      <div className="section-heading">
        <p className="eyebrow">Moments I treasure 📸</p>

        <h2>
          Our
          <span>Memories</span>
        </h2>

        <p>
          A collection of little moments that became
          beautiful memories.
        </p>
      </div>

      <div className="memory-grid">

        {memories.map((memory, index) => (
          <article
            className="memory-card"
            key={index}
          >
            <div className="memory-image">
              <img
                src={memory.image}
                alt={memory.title}
              />
            </div>

            <div className="memory-content">
              <span className="memory-date">
                {memory.date}
              </span>

              <h3>{memory.title}</h3>

              <p>{memory.description}</p>
            </div>
          </article>
        ))}

      </div>

    </section>
  );
}

export default Memories;