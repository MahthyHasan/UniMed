import React, { useEffect, useState } from "react";
import "./About.css"; // Import your CSS file
import userImage from "../../../assets/images/doc2.jpg"; // Import the image file
import NavBar from "./navbar";

const AboutUs = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    // Remove the animation class after the animation ends
    const onAnimationEnd = () => {
      setAnimate(false);
    };

    // Add the animation class when the component mounts
    setAnimate(true);

    // Add event listener for animation end
    document
      .querySelector(".about-title")
      .addEventListener("animationend", onAnimationEnd);

    // Clean up event listener
    return () => {
      document
        .querySelector(".about-title")
        .removeEventListener("animationend", onAnimationEnd);
    };
  }, []); // Empty dependency array to run only once on component mount

  return (
    <>
    <NavBar />
    <section className="about-us">
      
      <div className="about">
        <br></br>
        <br></br>
        <img src={userImage} className="pic" alt="Girl" />{" "}
        {/* Use the imported image */}
        <div className="text">
          {/* Apply animation class conditionally */}
          <h2 className={animate ? "about-title" : ""}>
            About <span style={{ color: animate ? "#030303" : "" }}>Us</span>
          </h2>
          <br></br>
          <p>
            At Uva Wellassa University of Sri Lanka, we prioritize the health
            and well-being of our students. Our University Medical Center, led
            by the University Medical Officer (UMO), provides comprehensive
            medical care free of charge to all students. With the support of a
            qualified nurse and pharmacist, we ensure that our students receive
            the highest standard of healthcare. Medical reports are carefully
            certified by the UMO before being submitted for approval,
            demonstrating our commitment to the health and safety of our student
            community.
          </p>
          <div className="data">
            <a
              href="https://www.uwu.ac.lk/academic/units/university-medical-center/"
              className="hire"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
    
  );
};

export default AboutUs;
