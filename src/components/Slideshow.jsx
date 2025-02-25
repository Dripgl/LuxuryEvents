import React, { useState, useEffect } from "react";                     
import '../style/Slideshow.css';


import Wedding from "../assets/Wedding.png";
import Lime from "../assets/Lime.png";
import Etna from "../assets/Etna.png";
import DG from "../assets/DG.png";



const images = [Lime, DG, Wedding, Etna];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slideshow-container">
      <button className="slideshow_button">START MAKING MEMORIES</button>
      
      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}>

          <img src={image} alt={`Slide ${index}`} className="carousel-image" />
        </div>
      ))}

      {/* Controlli */}
      <div className="slideshow-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => changeSlide(index)}>
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Slideshow;

