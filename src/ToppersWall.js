import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Include autoplay styles if needed


import "./style.css"; // Ensure the correct CSS file is linked

const ToppersWall = () => {
  const categories = [
    "NEET (UG) 2024", "IIT JEE", "UPSC CSE", "GATE",
    "Board Exams - CBSE 10th", "Board Exams - ICSE 10th",
    "Board Exams - CBSE 12th", "CA", "MBA", "SSC"
  ];

  const categoryImages = {
    "NEET (UG) 2024": ["neet1.webp", "neet1.webp", "neet1.webp"],
    "IIT JEE": ["jee1.jpg", "jee2.jpg", "jee3.jpg"],
    "UPSC CSE": ["upsc1.jpg", "upsc2.jpg", "upsc3.jpg"],
    "GATE": ["gate1.webp", "gate1.webp", "gate1.webp"],
    "Board Exams - CBSE 10th": ["cbse10_1.jpg", "cbse10_2.jpg", "cbse10_3.jpg"],
    "Board Exams - ICSE 10th": ["icse10_1.jpg", "icse10_2.jpg", "icse10_3.jpg"],
    "Board Exams - CBSE 12th": ["cbse12_1.jpg", "cbse12_2.jpg", "cbse12_3.jpg"],
    "CA": ["ca1.jpg", "ca2.jpg", "ca3.jpg"],
    "MBA": ["mba1.jpg", "mba2.jpg", "mba3.jpg"],
    "SSC": ["ssc1.webp", "ssc1.webp", "ssc1.webp"]
  };

  const [selectedCategory, setSelectedCategory] = useState("UPSC CSE");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="toppers-section">
      {/* Category Buttons */}
      <div className="category-buttons">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Swiper Slider */}
      <section className="slider-section">
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          className="mySwiper"
        >
          {categoryImages[selectedCategory].map((image, idx) => (
            <SwiperSlide key={idx}>
              <img src={image} alt={`${selectedCategory} ${idx + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default ToppersWall;