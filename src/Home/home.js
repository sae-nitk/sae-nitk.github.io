import React from "react";
import './home.css';
import image1 from '../images/hp1.jpg';
import image2 from '../images/hp2.jpg';
import image3 from '../images/hp3.jpg';
import image4 from '../images/hp4.jpg';
import image5 from '../images/hp5.jpg';
// import * as AiIcons from 'react-icons/ai';

const images = [image1, image2, image3, image4,image5];
var delay = 4000;

export default function Home() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length-1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <img
            src={image}
            className="slide"
            key={index}
            width="100vw"
            height="auto"
          />
        ))}
      </div>

      <span className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </span>
      <div className="register-event">
      <button>Register for abc</button>
      </div>
    </div>
  );
}