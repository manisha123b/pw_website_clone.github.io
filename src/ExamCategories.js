import React from 'react';
import './style.css';

const examCategories = [
  {
    title: "NEET",
    tags: ["class 11", "class 12", "Dropper"],
    image: "/neet-icon.webp",
  },
  {
    title: "IIT JEE",
    tags: ["class 11", "class 12", "Dropper"],
    image: "/iitjee-icon.webp",
  },
  {
    title: "School Preparation",
    tags: ["class 6", "class 7", "class 8", "More"],
    image: "/school-icon.webp",
  },
  {
    title: "UPSC",
    tags: [],
    image: "/upsc-icon.webp",
  },
  {
    title: "Govt Job Exams",
    tags: ["SSC", "Banking", "Teaching", "Judiciary"],
    image: "/govt-icon.webp",
  },
  {
    title: "Defence",
    tags: ["NDA", "CDS", "AFCAT", "Agniveer"],
    image: "/defence-icon.webp",
  },
];

const ExamCategories = () => {
  return (
    <section className="exam-categories">
      <h2 className="section-title">Exam Categories</h2>
      <p className="section-subtitle">
        PW is preparing students for 35+ exam categories. Scroll down to find the one you are preparing for.
      </p>

      <div className="category-grid">
        {examCategories.map((category, index) => (
          <div className="category-card" key={index}>
            <div className="category-header">
              <h3>{category.title}</h3>
              {category.image && <img src={category.image} alt={category.title} />}
            </div>
            <div className="category-tags">
              {category.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <button className="explore-btn">
              Explore Category <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExamCategories;
