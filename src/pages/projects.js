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
            <div className= "projects-item">
              <a href='https://weatherly-2021.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                <div className= "projects-img-container">
                  <img src={Bear} alt='Bear' width={'300px'} height= {'300px'} />
                </div>
              </a>
              <div className= "projects-img-description">
                <div className= "projects-img-description-title">weatherly</div>
                <ul>
                  <li>technologies used: React.js, node.js, MongoDB, heroku</li>
                  <li><a href= "https://github.com/weblab-class/nghi-nguyen-beep">source code</a> </li>
                  <li>First experience / project with React. It uses a weather api to give the user suggestions on clothing depending on local weather.</li>
                </ul>
              </div>
            </div>
            <div className= "projects-item">
              <a href='https://web.mit.edu/acc/www/' target='_blank' rel='noopener noreferrer'>
                <div className= "projects-img-container">
                  <img src={acc} alt='acc' width={'250px'} height= {'250px'} />
                </div>
              </a>
              <div className= "projects-img-description">
                <div className= "projects-img-description-title">ITEC</div>
                <ul>
                  <li>technologies used: HTML, CSS, JS, Bootstrap</li>
                  <li><a href='https://github.com/nghi-nguyen-beep/acc-website'>source code</a></li>
                  <li>Website built for a school organization. Basic functionality and styling.</li>
                </ul>
              </div>
            </div>
            <div className= "projects-item">
              <div className= "projects-img-container">
                <img src={pandji} alt='pandji' width={'200px'} height= {'200px'} />
              </div>
              
              <div className= "projects-img-description">
                <div className= "projects-img-description-title">PANDJI</div>
                <ul>
                  <li>technologies used: HTML, CSS, Python, Arduino, POSTAPI</li>
                  <li>source code: TBD</li>
                  <li>Jackbox inspired game for an Embedded Systems / IoT class. Requires handmade circuit device that submits POSTs and GET requests.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageAnimate>
    );
};

export default Projects;