import './includes/css/art.css';
import PageAnimate from '../components/PageAnimate.js';
import artGalleryImages from '../components/ArtGalleryImages';
import mixedMediaImages from '../components/ArtMixedMediaImages';
import ArtCarousel from '../components/ArtCarousel';

function Art() {
    return (
      <PageAnimate>
        <div className = "art-main">
          <div className= "art-header">
            <div className="art-title">
              <b>Art</b>
            </div>
            <div className="art-description">
              A wiggly wobbly, creative journey I frequent to keep my cognitive right side active.  
            </div>
          </div>
          <div className="art-content">
            <section className="art-gallery-section" aria-labelledby="mixed-media-title">
              <h2 className="art-section-title" id="mixed-media-title">mixed media</h2>
              <ArtCarousel images={mixedMediaImages} label="Mixed media" />
            </section>
            <section className="art-gallery-section" aria-labelledby="digital-title">
              <h2 className="art-section-title" id="digital-title">digital</h2>
              <ArtCarousel images={artGalleryImages} label="Digital" />
            </section>
          </div>
        </div>
        </PageAnimate>
      );
};

export default Art;