import React from 'react';
import "./about.css";

const About = () => {
  return (
    
         <div className="about-container">
      {/* Header Section */}
      <header className="about-header">
        <h1>About Us</h1>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h2>Welcome to Travel World</h2>
        <p>
          At <span className="highlight">Travel World</span>, we believe that traveling is not just about visiting
          places; it's about creating unforgettable experiences and exploring the beauty of the world. Our mission is
          to make your travel journey smooth, exciting, and fulfilling.
        </p>
        <p>
          Whether you're planning an adventurous trip, a relaxing vacation, or a cultural exploration, we are here to
          provide you with top-notch services and personalized travel plans. With years of experience, we pride
          ourselves on being your trusted travel partner.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          To inspire and guide travelers around the globe by offering exceptional service, tailored travel packages,
          and a passion for exploration. We strive to create memories that last a lifetime.
        </p>
      </section>
    </div>
  )
}

export default About