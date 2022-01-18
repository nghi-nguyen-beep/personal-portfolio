import chair from '../assets/art/chair.png';
import maki from '../assets/art/maki.png';
import pinterest from '../assets/art/pinterest.png';
import fam from '../assets/art/fam.png';
import './includes/css/art.css';

function Art() {
    return (
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
            <img src= {chair} alt= "chair" height= {'400px'} width= {'400px'} />
            <img src= {maki} alt= "maki" height= {'400px'} width= {'400px'} />
            <img src= {pinterest} alt= "pinterest" height= {'400px'} width= {'400px'} />
            <img src= {fam} alt= "fam" height= {'400px'} width= {'400px'} />

          </div>
        </div>
      );
};

export default Art;