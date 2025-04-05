'use client'
import React, { useState } from "react";
import img1 from "../../public/testimonials-assets/img1.svg";
import subTextTesti from "../../public/testimonials-assets/text.svg";
import Image from "next/image";
import styles from "./page.module.css";

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      image: img1,
      name: "Mike Taylor",
      title: "Lahore, Pakistan",
      quote:
        "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    },
    {
      image: img1,
      name: "Chris Thomas",
      title: "CEO of Red Button",
      quote:
        "Wonder an unable except better stairs do ye admire. Highly motionless thoughts fat preferred led together acquiring.",
    },
    {
      image: img1,
      name: "Sarah Johnson",
      title: "Marketing Manager",
      quote:
        "The quick brown fox jumps over the lazy dog. This is a test testimonial to show how the slider works.",
    },
  ];

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.testiContainer}>
      <div className={styles.testiMaxWidthContainer}>
        <div className={styles.testiTitle} style={{}}>
          <h2 className={styles.testiSectionTitle}>TESTIMONIALS</h2>
          <div className={styles.testiTitleWrapper}>
            <Image src={subTextTesti} alt="text" width={0} height={0}  sizes="(max-width: 768px) 100vw, 550px"
            style={{ width: "100%", height: "100%" }}  />
          </div>
          <div className={styles.testiIndicatorWrapper}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${styles.testiIndicator} ${
                  index === currentTestimonial
                    ? styles.testiActiveIndicator
                    : styles.testiInactiveIndicator
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>

        <div className={styles.testiGridContainer}>
          <div className={styles.testiCard}>
            <div className={styles.testiInCard} >
              <Image
                className={styles.testiAuthorImage}
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
              />
              <div style={{ marginLeft: "1rem" }}>
                <p className={styles.testiQuote}>{testimonials[currentTestimonial].quote}</p>
                <p className={styles.testiAuthorName}>
                  {testimonials[currentTestimonial].name},{" "}
                  <span className={styles.testiAuthorTitle}>
                    {testimonials[currentTestimonial].title}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.testiArrowContainer}>
            <button className={styles.testiArrowButton} onClick={handlePrev}>
              <img src="/assets/downarrow.svg" alt="Previous" style={{ transform: "rotate(180deg)" }} />
            </button>
            <button className={styles.testiArrowButton} onClick={handleNext}>
              <img src="/assets/downarrow.svg" alt="Next" style={{ transform: "rotate(-360deg)" }} />
            </button>
          </div>
          <div className={styles.testiMobArrowContainer}>
            <button className={styles.testiArrowButton} onClick={handlePrev}>
              <img src="/assets/downarrow.svg" alt="Previous" style={{ transform: "rotate(90deg)" }} />
            </button>
            <button className={styles.testiArrowButton} onClick={handleNext}>
              <img src="/assets/downarrow.svg" alt="Next" style={{ transform: "rotate(-90deg)" }} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Testimonials;
