const Slider = ({ catalog, currentIndex, onImageSelect }) => {
  
  return (
    <div className="slide" >
      {catalog.map((thumb, i) => {
        return (
          <div
          key={i}
          onClick={onImageSelect}
            className={`slide-image ${
              currentIndex === i ? "focus-border" : ""
            }`}
          >
            <img src={thumb.image} alt="thumb" id={i}/>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
