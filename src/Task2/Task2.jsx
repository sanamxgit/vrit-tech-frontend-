import React, { useState } from "react";
import "./task2.css";

const iconSet = ["⚛️", "👍", "🟩", "🎨"];

const initialCards = [
  {
    id: 1,
    title: "All Courses",
    count: "23",
    desc: "courses you're powering through right now.",
    wide: true,
    tone: "primary",
  },
  {
    id: 2,
    title: "Upcoming Courses",
    count: "05",
    desc: "exciting new courses waiting to boost your skills.",
    tall: true,
    tone: "soft",
  },
  {
    id: 3,
    title: "Ongoing Courses",
    count: "10",
    desc: "currently happening—don't miss out on the action!",
    tall: true,
    tone: "soft",
  },
  {
    id: 4,
    title: "All Courses",
    count: "23",
    desc: "courses you're powering through right now.",
    tall: true,
    tone: "soft",
  },
  {
    id: 5,
    title: "Upcoming Courses",
    count: "05",
    desc: "exciting new courses waiting to boost your skills.",
    wide: true,
    tone: "primary",
  },
  {
    id: 6,
    title: "Ongoing Courses",
    count: "10",
    desc: "currently happening—don't miss out on the action!",
    tall: true,
    tone: "soft",
  },
  {
    id: 7,
    title: "All Courses",
    count: "23",
    desc: "courses you're powering through right now.",
    tall: true,
    tone: "soft",
  },
  {
    id: 8,
    title: "Upcoming Courses",
    count: "05",
    desc: "exciting new courses waiting to boost your skills.",
    tall: true,
    tone: "soft",
  },
  {
    id: 9,
    title: "Ongoing Courses",
    count: "10",
    desc: "currently happening—don't miss out on the action!",
    wide: true,
    tone: "primary",
  },
];

const upcomingPreset = {
  title: "Upcoming Courses",
  count: "05",
  desc: "exciting new courses waiting to boost your skills.",
  tone: "primary",
};

function CourseCard({ card, activeId, hoveredId, setHoveredId, onCardClick }) {
  const isActive = activeId === card.id;
  const isHovered = hoveredId === card.id;

  const displayCard = isActive
    ? { ...card, ...upcomingPreset }
    : isHovered
    ? { ...card, tone: "primary" }
    : card;

  return (
    <div
      className={[
        "course-card",
        displayCard.wide ? "wide" : "",
        displayCard.tall ? "tall" : "",
        displayCard.tone === "primary" ? "primary" : "soft",
        isActive ? "active" : "",
        isHovered ? "hovered" : "",
      ]
        .join(" ")
        .trim()}
      onMouseEnter={() => setHoveredId(card.id)}
      onMouseLeave={() => setHoveredId(null)}
      onClick={() => onCardClick(card.id)}
    >
      <div className="card-inner">
        <div className="card-top">
          <button className="view-btn">View all Courses →</button>
        </div>

        <div className="card-icons">
          {iconSet.map((icon, index) => (
            <span className="icon-badge" key={index}>
              {icon}
            </span>
          ))}
        </div>

        <div className="card-bottom">
          <div className="count-wrap">
            <span className="count">{displayCard.count}</span>
            <span className="plus">+</span>
          </div>

          <div className="content-wrap">
            <h3>{displayCard.title}</h3>
            <p>{displayCard.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Task2() {
  const [activeId, setActiveId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const handleCardClick = (id) => {
    setActiveId(id);
  };

  return (
    <div className="task2-wrapper">
      <div className="cards-flow">
        {initialCards.map((card) => (
          <CourseCard
            key={card.id}
            card={card}
            activeId={activeId}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}