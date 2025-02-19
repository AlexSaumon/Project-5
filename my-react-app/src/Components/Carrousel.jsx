import '../Styles/Carrousel.scss'

import { useState } from 'react';

function Carousel({ logement }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // vérifications si il y a des images
  if (!logement || !logement.pictures || logement.pictures.length === 0) {
    return <p>No pictures available</p>;
  }

// gestions du défilement

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length); // modulo qui renvoit l'index à 0 si index = .lenght
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };
/** Les flèches n'apparaisse que si il y plus de 1 images */
  return (
    <div className="carrousel">
      {logement.pictures.length > 1 && (
        <button className='prev' onClick={prevSlide}>❮</button>
      )}
      <img src={logement.pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
      {logement.pictures.length > 1 && (
        <div className="image-counter">
          {currentIndex + 1} / {logement.pictures.length}
        </div>
      )}
      {logement.pictures.length > 1 && (
        <button className='next' onClick={nextSlide}>❯</button>
      )}
    </div>
  );
}

export default Carousel;
