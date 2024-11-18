import './includes/css/art.css';
import PageAnimate from '../components/PageAnimate.js';
import artGalleryImages from '../components/ArtGalleryImages';
import ArtPiece from '../components/ArtPiece.js';

function Art() {
    return (
      <PageAnimate>
        <div className = "art-main">
          <div className= "art-header">
            <div className="art-title">
              art
            </div>
            <div className="art-description">
              Nghi's unofficial and continuous journey to prevent the decline of her cognitive right side.  
            </div>
          </div>
          <div className= "art-gallery">  
            {artGalleryImages.map((image, index) => (
                <div key= {image.title}>
                  <ArtPiece src={image.src} width={image.width} height={image.height} title={image.title} id={image.id} />
                </div>
            ))}
          </div>
        </div>
        </PageAnimate>
      );
};

export default Art;