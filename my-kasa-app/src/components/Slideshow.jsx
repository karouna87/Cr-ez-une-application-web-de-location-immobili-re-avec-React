import { useState } from "react";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import "./Slideshow.css";

function Slideshow({ pictures }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return null;
  }

  const total = pictures.length;

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? total - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === total - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="slideshow">

      <img
        src={pictures[currentIndex]}
        alt="Logement"
        className="slideshow-image"
      />

      {/* Flèches seulement si plusieurs images */}
      {total > 1 && (
        <>
          <img
            src={arrowLeft}
            alt="Précédent"
            className="slideshow-arrow left"
            onClick={prevSlide}
          />

          <img
            src={arrowRight}
            alt="Suivant"
            className="slideshow-arrow right"
            onClick={nextSlide}
          />
        </>
      )}

      {/* Numérotation seulement si plusieurs images */}
      {total > 1 && (
        <div className="slideshow-counter">
          {currentIndex + 1} / {total}
        </div>
      )}

    </div>
  );
}

export default Slideshow;
