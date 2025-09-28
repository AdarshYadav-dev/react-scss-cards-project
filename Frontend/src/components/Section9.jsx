import React from "react";
import "./Section9.scss";

const cardsData = [
  {
    id: 1,
    title: "Tailored eCommerce Solutions",
    text: "No cookie-cutter builds here — every project is custom-crafted to reflect your brand, your processes, and your growth plans.",
    img: "/Images/logo1.png",
    bg: "bcg1",
  },
  {
    id: 2,
    title: "Results-Driven Approach",
    text: "We focus on more than just delivering features — we deliver measurable improvements in performance, conversions, and customer experience.",
    img: "/Images/BG (2).png",
    bg: "bcg2",
  },
  {
    id: 3,
    title: "Transparent & Flexible Pricing",
    text: "Clear costs. No hidden fees. Flexible pricing models designed to suit projects of all sizes — from startups to enterprises.",
    img: "/Images/BG (3).png",
    bg: "bcg3",
  },
  {
    id: 4,
    title: "Certified Experts",
    text: "Work with a team of certified developers who bring years of proven experience and industry best practices to every project.",
    img: "/Images/BG (4).png",
    bg: "bcg4",
  },
  {
    id: 5,
    title: "Dedicated 24/7 Support",
    text: "We don’t disappear after launch — our friendly, proactive support team is always here to keep your store running at its best.",
    img: "/Images/BG (5).png",
    bg: "bcg5",
  },
];

const Section9 = () => {
  return (
    <div className="section9-container main-container">
      <div className="section9-content">
        <h1 className="section9-heading">Why Choose Magebyte?</h1>
        <p className="section9-title">
          Your eCommerce success deserves more than generic solutions — it needs
          a partner who understands your business, your customers, and your
          goals. At Magebytes, we combine deep Magento expertise with innovative
          thinking to help your store thrive.
        </p>
      </div>

      <div className="section9-card">
        {cardsData.slice(0, 3).map((card) => (
          <div key={card.id} className={`cards ${card.bg}`}>
            <div className="cards-icon">
              <img src={card.img} alt={card.title} />
            </div>
            <div className="cards-content">
              <p className="cards-title">{card.title}</p>
              <p className="cards-para">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="section9-card-bottom">
        {cardsData.slice(3).map((card) => (
          <div key={card.id} className={`cards ${card.bg}`}>
            <div className="cards-icon">
              <img src={card.img} alt={card.title} />
            </div>
            <div className="cards-content">
              <p className="cards-title">{card.title}</p>
              <p className="cards-para">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section9;
