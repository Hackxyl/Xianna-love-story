const reasons = [
  {
    icon: "❤️",
    title: "You are a gift",
    text:
      "Having you in my life is something I never want to take for granted. You are one of those beautiful gifts I didn't know I needed until you became part of my life.",
  },
  {
    icon: "✨",
    title: "You make moments special",
    text:
      "It doesn't always have to be something big. Somehow, having you around makes even the simplest moments feel a little more meaningful.",
  },
  {
    icon: "🥰",
    title: "I love your presence",
    text:
      "There is something comforting about simply having you around. Sometimes I don't need anything else — just knowing you're there is enough.",
  },
  {
    icon: "🤍",
    title: "I value your trust",
    text:
      "Thank you for trusting me and allowing me to become part of your world. That trust means more to me than I can properly explain.",
  },
  {
    icon: "🌙",
    title: "You are special to me",
    text:
      "Some people enter our lives and remain ordinary. Then there are people who slowly become impossible to imagine life without. You became one of those people.",
  },
  {
    icon: "∞",
    title: "Simply you",
    text:
      "More than anything, I love you for being you. I don't need you to be anyone else. Njeri, you are enough exactly as you are.",
  },
];

function Reasons() {
  return (
    <section className="reasons" id="reasons">

      <div className="section-heading">

        <p className="eyebrow">
          A few things about you ❤️
        </p>

        <h2>
          Why I
          <span>Love You</span>
        </h2>

        <p>
          I could probably write a thousand reasons,
          but these are a few that come from my heart.
        </p>

      </div>

      <div className="reasons-grid">

        {reasons.map((reason, index) => (

          <article
            className="reason-card"
            key={index}
          >

            <div className="reason-icon">
              {reason.icon}
            </div>

            <span className="reason-number">
              0{index + 1}
            </span>

            <h3>
              {reason.title}
            </h3>

            <p>
              {reason.text}
            </p>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Reasons;
