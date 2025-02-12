import '../Styles/Carrousel.scss'

import { useState } from 'react';

function Carousel({ logement }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure logement.pictures exists before mapping
  if (!logement || !logement.pictures || logement.pictures.length === 0) {
    return <p>No pictures available</p>;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrousel">
      {logement.pictures.length > 1 && (
        <button className='prev' onClick={prevSlide}>❮</button>
      )}
      <img src={logement.pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
      {logement.pictures.length > 1 && (
        <button className='next' onClick={nextSlide}>❯</button>
      )}
    </div>
  );
}

export default Carousel;
