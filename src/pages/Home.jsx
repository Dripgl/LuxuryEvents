import React, { useState } from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "../style page/Home.css";

import PolaroidGirl from "../assets/Home/PolaroidGirl.png";
import PolaroidSea from "../assets/Home/PolaroidSea.png";
import Travel from "../assets/Home/Travel.jpg";
import Incentives from "../assets/Home/Incentives.jpg";
import Catering from "../assets/Home/Catering.jpg";
import Ortigia from "../assets/Home/Ortigia.png";

import Slideshow from "../components/Slideshow";
import { Link } from "react-router-dom";



const testimonials = [
  {
    name: "Teresa May",
    position: "Founder at ET Company",
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
    rating: 4.5,
  },
  {
    name: "John Doe",
    position: "CEO at JD Solutions",
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(11).webp",
    review:
      "Amazing service and support. Highly recommended for anyone looking for quality and professionalism.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    position: "Marketing Director at ABC Ltd.",
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(12).webp",
    review:
      "A fantastic experience from start to finish. They truly understand the needs of their customers.",
    rating: 5,
  },
];

const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };


  return (
    <div className="travel-container">

      <Slideshow />
      <div className="travel-item">
        <div className="travel-description">
          <p className="philosopher_font">Unlock</p>
          <p className="petiText_font"> Exclusive </p>
          <p className="philosopher_font">Travel</p>
          <p className="philosopher_font">Experiences in</p>
          <p className="petiText_font"> Sicily </p>
        </div>
        <img src={PolaroidSea} alt="Destinazione 1" className="travel-image" />
      </div>
      <div className="travel-item reverse">
        <div className="travel-description">
          <p className="philosopher_font">You are at the</p>
          <p className="petiText_font"> Center </p>
          <p className="philosopher_font">of our</p>
          <p className="petiText_font"> Travel Universe </p>
          <button className="about_button">About Us</button>
        </div>
        <img src={PolaroidGirl} alt="Destinazione 2" className="travel-image" />
      </div>

      {/* 
          * CATEGORIES PART 
     */}
      <div>

      </div>
      <div className="section_container">
        <div className="text-section">
          <h2 className="titleFont_journey">Journey With Us</h2>
          <p className="catamText_fontDescrp">
            Experience luxury redefined with bespoke journeys crafted for discerning travelers.
            Step into timeless beauty, authentic traditions, and vibrant cultures set the stage
            for unforgettable memories.<br></br>
            Travel awakens emotions, a zest for living, and creates lasting memories.
            Are you ready to take a journey like no other?
          </p>

        </div>
        <div className="card">
          <img src={Travel} alt="Travel image" />
        </div>
      </div>
      <div className="section_container">
        <div className="card">
          <img src={Incentives} alt="Incentives image" />
        </div>
        <div className="text-section-inverse">
          <h2 className="titleFont_reverse">INCENTIVES</h2>
          <p className="catamText_fontInverse">
            Experience luxury redefined with bespoke journeys crafted for discerning travelers.
            Step into timeless beauty, authentic traditions, and vibrant cultures set the stage
            for unforgettable memories.<br></br>
            Travel awakens emotions, a zest for living, and creates lasting memories.
            Are you ready to take a journey like no other?
          </p>

        </div>
      </div>
      <div className="section_container">
        <div className="text-section">
          <h2 className="titleFont_wedding"> Slow Wedding </h2>
          <p className="catamText_fontDescrp">
            Experience luxury redefined with bespoke journeys crafted for discerning travelers.
            Step into timeless beauty, authentic traditions, and vibrant cultures set the stage
            for unforgettable memories.<br></br>
            Travel awakens emotions, a zest for living, and creates lasting memories.
            Are you ready to take a journey like no other?
          </p>

        </div>
        <div className="card">
          <img src={Catering} alt="Catering image" />
        </div>
      </div>
      <div>
        <img />
      </div>

      <div className="hero-section" style={{ backgroundImage: `url(${Ortigia})` }}>
        <h2 className="main-title">REDEFINING LUXURY IN SICILY</h2>
        <h2 className="subtitle">The luxury of time</h2>
        <p className="description">In the fast-paced modern world, Sicily offers the ultimate luxury: time. Time to slow down, immerse yourself in beauty, and savour the art of living. Here, every moment is an invitation to indulge, reflect, and connect deeply with your surroundings.
          In Sicily, luxury isn't about rushing through a packed itinerary—it's about embracing the present. It's about finding joy in the details, from the scent of fresh lemons to the warmth of Sicilian hospitality.</p>
        <button className="discover-button">
          <Link to="/travel" className="link-prop">
            DISCOVER MORE
            <ArrowRightAltIcon style={{ fontSize: '4rem', justifyContent: "center", marginRight: '8px', verticalAlign: 'middle' }} />
          </Link>
        </button>
      </div>


      {/* TESTIMONIAL  */}
      <section className="testimonial-container">
        <div className="container">
          <div className="text-center">
            <h3 className="testimonial-title">Sweet Success</h3>
            <p className="testimonial-description">
              The best way to gain trust are client testimonials
            </p>
          </div>

          <div className="carousel-container">
            <div className="testimonial-card">
              <img src={testimonials[currentIndex].img} alt={testimonials[currentIndex].name} className="testimonial-img" />
              <h5 className="testimonial-name">{testimonials[currentIndex].name}</h5>
              <h6 className="testimonial-position">{testimonials[currentIndex].position}</h6>
              <p className="testimonial-review">{testimonials[currentIndex].review}</p>
              <div className="testimonial-rating">{'★'.repeat(Math.floor(testimonials[currentIndex].rating))} {testimonials[currentIndex].rating % 1 !== 0 ? '☆' : ''}</div>
            </div>
          </div>
        </div>
        <button className="button-testimonial">ALTRE RECENSIONI</button>
      </section>

    </div>
  );
};

export default Home;
