import { useCallback, useEffect, useRef, useState } from "react";
import Viewer from "./components/Viewer";
import Slider from "./components/Slider";
import Header from "./components/Header";
import { catalogs } from "./assets/utils";
import "./App.css";
import prevIcon from "./assets/icons/left-icon.png";
import nextIcon from "./assets/icons/right_icon.png";

let interval = 2000;
function App() {
  const [catalog] = useState([...catalogs]);
  const [imageSelected, setImageSelect] = useState(catalog[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(false);

  const timeoutRef = useRef(null);

  const onPreviousSelect = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? catalog.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setImageSelect(catalog[newIndex]);
  };
  const onNextSelect = useCallback(() => {
    const isLastSlide = currentIndex === catalog.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setImageSelect(catalog[newIndex]);
  }, [currentIndex, catalog])

  const onImageSelect = (event) => {
    const index = event.target.id;
    setCurrentIndex(parseInt(index));
    setImageSelect(catalog[index]);
  };
  const autoSlideChange = (e) => {
   if(e.target.checked){ 
    setAutoSlide(true);
   } else {
     setAutoSlide(false);
   }
  }

  const resetTimeOut = () => {
    if(timeoutRef.current){
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    if(autoSlide){
      resetTimeOut();
      timeoutRef.current = setTimeout(onNextSelect, interval);
      return () => {
        resetTimeOut();;
      }
    }  
  }, [autoSlide, onNextSelect])

  return (
    <>
      <Header />
      <div className="viewer">
        <Viewer imageSelected={imageSelected} />
      </div>

      <div className="slider-container">
        <div onClick={onPreviousSelect} className="direction-circle">
          <img className="prev-icon" src={prevIcon} alt="prev-icon" />
        </div>

        <Slider
          catalog={catalog}
          currentIndex={currentIndex}
          onImageSelect={onImageSelect}
        />
        <div onClick={onNextSelect} className="direction-circle">
          <img className="prev-icon" src={nextIcon} alt="next-icon" />
        </div>
      </div>
      <div className="click-slide">
        <input type="checkbox" value={autoSlide} onChange={autoSlideChange} />
        <span>Start slideshow</span>
      </div>
    </>
  );
}

export default App;
