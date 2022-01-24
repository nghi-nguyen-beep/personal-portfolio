import './includes/css/projects.css';
import PageAnimate from '../components/PageAnimate';
import ProjectsList from '../components/ProjectsList';
import { motion } from 'framer-motion';

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
            {ProjectsList.map((project, index) => (
                  <div className= "projects-item" key= {project.id}>
                    <div className= "projects-img-description">
                      <div className= "projects-img-description-title">{project.title}</div>
                      <ul>
                        <li>{project.tech }</li>
                        <li><a href= {project.link}>website</a> </li>
                        <li><a href= {project.repo}>source code</a> </li>
                      </ul>
                    </div>
                    <div className= "projects-img-container">
                        <img src={project.src} alt={project.title} className= "projects-img" />
                    </div>
                  </div>
              ))}
          </div>
        </div>
      </PageAnimate>
    );
};

export default Projects;