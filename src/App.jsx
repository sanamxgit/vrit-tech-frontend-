import React, { useState } from "react";
import Task2 from "./Task2/Task2";

const features = [
  {
    title: "Start with Clarity",
    subtitle: "Step into a better learning path.",
    description:
      "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    image: "/photo1.png",
    variant: "red",
    layout: "layout-red",
    hoverText: "Clarity unlocked—stickers, sips, and skills all in one go!",
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
      "Theory is great, but action is better. At SkillShikshya, you learn by doing.",
    image: "/photo2.png",
    variant: "teal",
    layout: "layout-teal",
    hoverText: "Focused faces—learning mode: ON!",
    hoverReveal: true,
    hoverPerson: "/person2.png",
    slideText: "Laptops, lessons, and a whole lot of growth!",
    slideImage: "/person3.png",
    bgShape: "/subtract-teal.png",
  },
  {
    title: "Get Mentored & Supported",
    subtitle: "You're not learning alone.",
    description:
      "Stuck or need feedback? SkillShikshya’s community has your back.",
    image: "/photo3.png",
    variant: "purple",
    layout: "layout-purple",
    hoverReveal: false,
  },
  {
    title: "Achieve & Showcase",
    subtitle: "Build your portfolio, get job-ready.",
    description:
      "Each completed project builds a portfolio showcasing your skills.",
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
  hoverText,
  hoverReveal,
  hoverPerson,
  hoverPersonShadow,
  wowSticker,
  bgShape,
  slideText,
  slideImage,
}) => {
  const [slide, setSlide] = useState(0);

  return (
    <div className={`card card-${variant} ${layout} ${hoverReveal ? "hover-card" : ""}`}>
      
      {/* FRONT CARD */}
      <div className="card-face card-front">
        <div className="card-content">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{description}</p>
        </div>
        <img className="card-image" src={image} alt={title} />
      </div>

      {/* BACK CARD */}
      {hoverReveal && (
        <div className="card-face card-back">
          <img className="hover-bg" src={bgShape} alt="" />

          {slide === 0 ? (
            <>
              {hoverPersonShadow && (
                <img className="hover-person-shadow" src={hoverPersonShadow} alt="" />
              )}

              {hoverPerson && (
                <img className="hover-person" src={hoverPerson} alt={title} />
              )}

              {wowSticker && (
                <>
                  <img className="wow wow-top" src={wowSticker} alt="" />
                  <img className="wow wow-bottom" src={wowSticker} alt="" />
                </>
              )}

              <h4 className="hover-text">{hoverText}</h4>
            </>
          ) : (
            <>
              {slideImage && (
                <img className="hover-person" src={slideImage} alt="" />
              )}
              <h4 className="hover-text">{slideText}</h4>
            </>
          )}

          {/* ARROWS */}
          <button
            className="arrow arrow-left"
            onClick={() => setSlide(0)}
          >
            <img src="/arrow-left.png" alt="" />
          </button>

          <button
            className="arrow arrow-right"
            onClick={() => setSlide(1)}
          >
            <img src="/arrow-right.png" alt="" />
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
            {...feature}
          />
        ))}
      </div>
      <button type="button">onClick={Task2}</button>
      {/* Task2 component */}
      <Task2 />
    </section>
  );
};

export default App;