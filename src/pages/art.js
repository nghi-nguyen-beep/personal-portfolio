import './includes/css/art.css';
import PageAnimate from '../components/PageAnimate.js';
import artGalleryImages from '../components/ArtGalleryImages';
import { motion } from "framer-motion";
function Art() {
    return (
      <PageAnimate>
        <div className = "art-main">
          <div className= "art-header">
            <div className="art-title">
              art
            </div>
            <div className="art-description">
              some fun digital art that I started over winter break in order to learn how to draw body proportions. 
            </div>
          </div>
          <div className= "art-gallery">  
            {artGalleryImages.map((image, index) => (
              <div className= "art-piece-container" key= {image.id}>
                <div className= "art-image-description"> {image.title} </div>
                <img src= {image.src} alt= {image.id} className= "art-image" />
              </div>
            ))}
          </div>
        </div>
        </PageAnimate>
      );
};

export default Art;