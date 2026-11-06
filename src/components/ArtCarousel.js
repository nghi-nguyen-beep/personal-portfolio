import { useState } from 'react';

function ArtCarousel({ images, label = 'Art gallery' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % images.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showPrevious();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      showNext();
    }
  };

  return (
    <section
      className="art-gallery"
      aria-label={label}
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="art-carousel-stage">
        <div
          className="art-carousel-slide"
          role="group"
          aria-roledescription="slide"
          aria-label={`Artwork ${activeIndex + 1} of ${images.length}`}
        >
          <img className="art-carousel-image" src={activeImage.src} alt={activeImage.title} />
        </div>
        <button
          className="art-carousel-control art-carousel-previous"
          type="button"
          onClick={showPrevious}
          aria-label="Previous artwork"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          className="art-carousel-control art-carousel-next"
          type="button"
          onClick={showNext}
          aria-label="Next artwork"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <div className="art-carousel-footer">
        <div className="art-carousel-caption" aria-live="polite">
          <span className="art-carousel-title">{activeImage.title}</span>
          <span className="art-carousel-count">
            {activeIndex + 1} / {images.length}
          </span>
        </div>
        <div className="art-carousel-progress" aria-hidden="true">
          <span style={{ width: `${((activeIndex + 1) / images.length) * 100}%` }} />
        </div>
      </div>
    </section>
  );
}

export default ArtCarousel;
