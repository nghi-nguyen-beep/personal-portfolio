import aoDai from '../assets/art/aoDai.png';
import chair from '../assets/art/chair.png';
import maki from '../assets/art/maki.png';
import pinterest from '../assets/art/pinterest.png';
import fam from '../assets/art/fam.png';
import firstPin from '../assets/art/firstPin.png';
import firstSketch from '../assets/art/firstSketch.png';
import bunSketch from '../assets/art/bunSketch.png';
import './includes/css/art.css';
import vase from '../assets/art/vase.png';
import PageAnimate from '../components/PageAnimate.js';

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
              <img src= {vase} alt= "vase" height= {'450px'} width= {'450px'} />
              <img src= {aoDai} alt= "aoDai" height= {'450px'} width= {'450px'} />
              <img src= {chair} alt= "chair" height= {'450px'} width= {'450px'} />
              <img src= {maki} alt= "maki" height= {'450px'} width= {'450px'} />        
            
              <img src= {pinterest} alt= "pinterest" height= {'450px'} width= {'450px'} />
              <img src= {fam} alt= "fam" height= {'450px'} width= {'450px'} />
              <img src= {firstPin} alt= "firstPin" height= {'450px'} width= {'450px'} />

              <img src= {firstSketch} alt= "firstSketch" height= {'450px'} width= {'450px'} />
              <img src= {bunSketch} alt= "bunSketch" height= {'450px'} width= {'450px'} />
          </div>
          <>
            scroll horizontally to see more images
          </>
        </div>
        </PageAnimate>
      );
};

export default Art;