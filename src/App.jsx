import React from "react";

const features = [
  {
    title: "Start with Clarity",
    subtitle: "Step into a better learning path.",
    description:
      "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    image: "/photo1.png",
    variant: "red",
    layout: "layout-red",
    hoverReveal: true,
    hoverPerson: "/person1.png",
    hoverPersonShadow: "/shadow.png",
    wowSticker: "/wow.png",
    bgShape: "/subtract.png",
  },
  {
    title: "Learn by Doing",
    subtitle: "Practical skills, real projects.",
    description:
      "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
    image: "/photo2.png",
    variant: "teal",
    layout: "layout-teal",
    hoverReveal: true,
    hoverPerson: "/person2.png",
    bgShape: "/subtract-teal.png",
  },
  {
    title: "Get Mentored & Supported",
    subtitle: "You're not learning alone.",
    description:
      "Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.",
    image: "/photo3.png",
    variant: "purple",
    layout: "layout-purple",
    hoverReveal: false,
  },
  {
    title: "Achieve & Showcase",
    subtitle: "Build your portfolio, get job-ready.",
    description:
      "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
    image: "/photo4.png",
    variant: "beige",
    layout: "layout-beige",
    hoverReveal: false,
  },
];

const FeatureCard = ({
  title,
  subtitle,
  description,
  image,
  variant,
  layout,
  hoverReveal,
  hoverPerson,
  hoverPersonShadow,
  wowSticker,
  bgShape,
}) => {
  return (
    <div className={`card card-${variant} ${layout} ${hoverReveal ? "hover-card" : ""}`}>
      <div className="card-face card-front">
        <div className="card-content">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{description}</p>
        </div>
        <img className="card-image" src={image} alt={title} />
      </div>

      {hoverReveal && (
        <div className="card-face card-back">
          <img className="hover-bg" src={bgShape} alt="" />
          <img className="hover-person-shadow" src={hoverPersonShadow} alt={title} />
          <img className="hover-person" src={hoverPerson} alt={title} />
          <img className="wow wow-top" src={wowSticker} alt="" />
          <img className="wow wow-bottom" src={wowSticker} alt="" />

          <h4 className="hover-text">
            Clarity unlocked—stickers, sips, and skills all in one go!
          </h4>

          <button className="arrow arrow-left" type="button" aria-label="Previous">
            <img src="/arrow-left.png" alt="arrow-left" />
          </button>
          <button className="arrow arrow-right" type="button" aria-label="Next">
            <img src="/arrow-right.png" alt="arrow-right" />
          </button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <section className="feature-section">
      <div className="content">
        <p>Your SkillShikshya Journey</p>
        <h1>
          <span className="text-color">Step</span> In.{" "}
          <span className="text-color">Skill</span> Up.{" "}
          <span className="text-color">Step</span> Out. 🚀
        </h1>
      </div>

      <div className="container">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            subtitle={feature.subtitle}
            description={feature.description}
            image={feature.image}
            variant={feature.variant}
            layout={feature.layout}
            hoverReveal={feature.hoverReveal}
            hoverPersonShadow={feature.hoverPersonShadow}
            hoverPerson={feature.hoverPerson}
            wowSticker={feature.wowSticker}
            bgShape={feature.bgShape}
          />
        ))}
      </div>
    </section>
  );
};

export default App;