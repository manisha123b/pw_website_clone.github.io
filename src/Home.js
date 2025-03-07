import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./style.css"; // Ensure this file contains styles
import ExamCategories from "./ExamCategories"; // Import the component
import ToppersWall from "./ToppersWall"; 

function Home() {
  return (
    <div className="home">
      {/* Header & Navigation */}

      {/* Hero Section with Swiper Carousel */}
      <section className="hero">
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/banner1.jpg" alt="Banner 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/banner2.jpg" alt="Banner 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/banner3.jpg" alt="Banner 3" />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>
            Bharat’s <span className="highlight">Trusted & Affordable</span> Educational Platform
          </h2>
          <p>
            Unlock your potential by signing up with Physics Wallah—The most affordable learning solution.
          </p>
          <button className="btn get-started">Get Started</button>
        </div>
        <div className="hero-image">
          <img src="/heroImage.webp" alt="Hero Banner" />
        </div>
      </section>

      {/* Trusted Platform Section */}
      <section className="trusted-platform">
        <div className="info-box">
          <div className="info">
            <img src="/live-icon.webp" alt="Live" />
            <p>
              <strong>100 +</strong>
              <br />
              Offline centers
            </p>
          </div>
          <div className="info">
            <img src="/students-icon.webp" alt="Students" />
            <p>
              <strong>10 Million +</strong>
              <br />
              Tests, sample papers & notes
            </p>
          </div>
          <div className="info">
            <img src="/doubt-icon.webp" alt="Doubt Solving" />
            <p>
              <strong>24 x 7</strong>
              <br />
              Doubt solving sessions
            </p>
          </div>
          <div className="info">
            <img src="/offline-icon.webp" alt="Offline Centres" />
            <p>
              <strong>Daily Live</strong>
              <br />
              Interactive classes
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Use ExamCategories Component Here */}
      <ExamCategories />

      <div className="centres">
  {/* Background Video Wrapper */}
  <div className="video-container">
    <video autoPlay loop muted className="background-video">
      <source src="/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  <div className="content-overlay">
    <h2>Explore Tech-Enabled Offline Vidyapeeth Centres</h2>
    <p>Creating new benchmarks in learning experiences</p>

    <div className="centres-container">
      <h3>Find Vidyapeeth Centre in your city</h3>
      <p>Available in <span className="highlight">105</span> cities</p>

      <div className="grid-container">
        {[
          { city: "Kota", img: "kota.jpg" },
          { city: "Bareilly", img: "bareilly.jpg" },
          { city: "Patna", img: "patna.jpg" },
          { city: "Noida", img: "noida.jpg" },
          { city: "New Delhi", img: "delhi.jpg" },
          { city: "Kolkata", img: "kolkata.jpg" },
          { city: "Ahmedabad", img: "ahmedabad.jpg" },
          { city: "Jaipur", img: "jaipur.jpg" },
        ].map((item, index) => (
          <div key={index} className="city-card">
            <img src={item.img} alt={item.city} />
            <p>{item.city}</p>
          </div>
        ))}
      </div>

      <button className="view-more">View More</button>
    </div>
  </div>
</div>


<div className="trusted-platform">
  <h2>A Platform Trusted by Students</h2>
  <p>Physics Wallah aims to transform not just through words, but provide results with numbers!</p>

  <div className="stats-container">
    <div className="stat-card light-yellow">
      <h3>15 Million+</h3>
      <p>Happy Students</p>
      <img src="happy-student.png" alt="Happy Student" />
    </div>

    <div className="stat-card light-pink">
      <h3>24000+</h3>
      <p>Mock Tests</p>
    </div>

    <div className="stat-card light-blue">
      <h3>14000+</h3>
      <p>Video Lectures</p>
    </div>

    <div className="stat-card light-purple">
      <h3>80000+</h3>
      <p>Practice Papers</p>
    </div>
  </div>

  <button className="get-started">Get Started</button>

  <h2>Academic Excellence : Results</h2>
  <p>Giving wings to a million dreams, a million more to go</p>
</div>

{/* ✅ Use Academic Excellence : Results  Here */}
<ToppersWall /> 

<section className="app-download-section">
      <div className="content">
        <h2>Join 15 Million students on the app today!</h2>
        <ul className="features">
          <li>✅ Live & recorded classes available at ease</li>
          <li>✅ Dashboard for progress tracking</li>
          <li>✅ Lakhs of practice questions</li>
        </ul>
        <div className="app-buttons">
          <img src="/google-play.png" alt="Google Play" />
          <img src="/app-store.png" alt="App Store" />
        </div>
      </div>
      <div className="image-container">
        <img src="/teacher.png" alt="App Preview" />
      </div>
    </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <p>&copy; 2025 Physics Wallah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
