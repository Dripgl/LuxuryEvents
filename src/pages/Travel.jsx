import React from "react";

import Agrigento from "../assets/journey/Agrigento.png";
import Cathedral from "../assets/journey/Cathedral.png";
import Journey from "../assets/journey/Journey.png";
import Sunday from "../assets/journey/Sunday.png";
import Cefalu from "../assets/journey/Cefalu.png";
import Breakfast from "../assets/journey/Breakfast.png";
import Nonnas from "../assets/journey/Nonnas.png";
import Shop from "../assets/journey/Shop.png";

import "../style page/Travel.css"


function Travel() {

    return (
        <div className="journey-container">
            <div className="journey-img">
                <img src={Journey} alt="Journey page" />
            </div>
            {/* section "Slow Tours" */}
            <div className="slowTours_section">
                <h1 className="petiText_title">Slow Tours:</h1>
                <h2 className="philosopherText_subtitle">Luxury Beyond Imagination</h2>
                <p className="catamaranText_description">Experience a new dimension of travel, where luxury meets authenticity. We specialize in creating exceptional, tailor-made itineraries for all types of travel experiences in Sicily and Italy. Every journey is curated with an unwavering commitment to excellence and meticulous attention to detail, ensuring that each moment with us is truly one-of-a-kind.</p>
                <div className="containerImg_tours">
                    <img className="imgLeft" src={Cathedral} alt="Cathedral page" />
                    <img className="imgRight" src={Agrigento} alt="Agrigento page" />
                </div>
            </div>

            {/* section "back to the roots" */}
            <div className="roots_container" >
                <h1 className="philosopherText_title"> Sicily: Back to the Roots</h1>
                <h1 className="catamaranText_subtitle">LIVE AS A LOCAL</h1>
                <p className="catamaranText_description2">Rediscover simplicity and authenticity by immersing yourself in the vibrant life of Sicily's locals. This isn't just travel—it's a journey into the heart of Sicilian culture.</p>
                <div className="section_container">
                    <div className="text-section">
                        <h2 className="titleRoots_phils"><span className="numberRoots">01.</span> Start your day with espresso at bustling piazza cafè.</h2>
                        <p className="descriptionRoots">
                            Experience luxury redefined with bespoke journeys crafted for discerning travelers.
                            Step into timeless beauty, authentic traditions, and vibrant cultures set the stage
                            for unforgettable memories.<br></br>
                            Travel awakens emotions, a zest for living, and creates lasting memories.
                            Are you ready to take a journey like no other?
                        </p>
                    </div>
                    <div className="card-journey">
                        <img src={Breakfast} alt="Journey image" />
                    </div>
                </div>
                <div className="section_container">
                    <div className="card-journey">
                        <img src={Shop} alt="Journey image" />
                    </div>
                    <div className="text-section-inverse">
                        <h2 className="titleRoots_phils"><span className="numberRoots">02.</span> Shop for fresh ingredients at local markets alongside Sicilian Nonnas</h2>
                        <p className="descriptionRoots">
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
                        <h2 className="titleRoots_phils"><span className="numberRoots">03.</span> Share a traditional Sunday lunch with a local family, savoring recipes passed down through generations.</h2>
                        <p className="descriptionRoots">
                            Experience luxury redefined with bespoke journeys crafted for discerning travelers.
                            Step into timeless beauty, authentic traditions, and vibrant cultures set the stage
                            for unforgettable memories.<br></br>
                            Travel awakens emotions, a zest for living, and creates lasting memories.
                            Are you ready to take a journey like no other?
                        </p>

                    </div>
                    <div className="card-journey">
                        <img src={Sunday} alt="Journey image" />
                    </div>
                </div>
                <div className="section_container">
                    <div className="card-journey">
                        <img src={Nonnas} alt="Journey image" />
                    </div>
                    <div className="text-section-inverse">
                        <h2 className="titleRoots_phils"><span className="numberRoots">04.</span> Join hands-on cooking workshops, learning to master arancini and handmade pasta.</h2>
                        <p className="descriptionRoots">
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
                        <h2 className="titleRoots_phils"><span className="numberRoots">05.</span> Explore charming villages like Noto, Erice, or Modica, guided by locals who reveal hidden traditions.</h2>
                        <p className="descriptionRoots">
                            Experience luxury redefined with bespoke journeys crafted for discerning travelers.
                            Step into timeless beauty, authentic traditions, and vibrant cultures set the stage
                            for unforgettable memories.<br></br>
                            Travel awakens emotions, a zest for living, and creates lasting memories.
                            Are you ready to take a journey like no other?
                        </p>

                    </div>
                    <div className="card-journey">
                        <img src={Cefalu} alt="Journey image" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Travel;