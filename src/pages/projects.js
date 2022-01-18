import './includes/css/projects.css';
import weatherly from '../assets/projects/weatherly.png';
function Projects() {
    return (
      <div className = "projects-main">
        <div className= "projects-header">
          <div className="projects-title">
            projects
          </div>
          <div className="projects-description">
            some projects that I've done over the years. 
          </div>
        </div>
        <div className= "art-gallery">
          <img src={weatherly} alt='weatherly' width={'400px'} height= {'400px'} />
        </div>
      </div>
    );
};

export default Projects;