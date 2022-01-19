import './includes/css/projects.css';
import Bear from '../assets/projects/Bear.png';
import acc from '../assets/projects/acc.png';
import pandji from '../assets/projects/pandji.png';
import PageAnimate from '../components/PageAnimate';

function Projects() {
    return (
      <PageAnimate>
        <div className = "projects-main">
          <div className= "projects-header">
            <div className="projects-title">
              projects
            </div>
            <div className="projects-description">
              some projects that I've done over the years. 
            </div>
          </div>
          <div className= "projects-gallery">
          <a href='https://weatherly-2021.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
          <div className= "projects-img-container">
              <img src={Bear} alt='Bear' width={'300px'} height= {'300px'} />
            </div>
          </a>
          <a href='https://web.mit.edu/acc/www/' target='_blank' rel='noopener noreferrer'>
            <div className= "projects-img-container">
              <img src={acc} alt='acc' width={'250px'} height= {'250px'} />
            </div>
          </a>
          <div className= "projects-img-container">
              <img src={pandji} alt='pandji' width={'200px'} height= {'200px'} />
            </div>
          </div>
        </div>
      </PageAnimate>
    );
};

export default Projects;