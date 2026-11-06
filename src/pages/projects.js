import './includes/css/projects.css';
import PageAnimate from '../components/PageAnimate';
import ProjectsList from '../components/ProjectsList';
import ProjectPiece from '../components/ProjectPiece';

function Projects() {
    return (
      <PageAnimate>
        <div className = "projects-main">
          <div className= "projects-header">
            <div className="projects-title">
              <b>Projects</b>
            </div>
            <div className="projects-description">
              Some projects that I've done over the years. 
            </div>
          </div>
          <div className= "projects-gallery">
            {ProjectsList.map((project, index) => (
              <ProjectPiece key= {project.id} src= {project.src} title= {project.title} id= {project.id} link= {project.link} previewImage= {project.previewImage} previewVideo= {project.previewVideo} previewTitle= {project.previewTitle} previewDescription= {project.previewDescription} previewByline= {project.previewByline} repo= {project.repo} tech= {project.tech} description= {project.description}/>
              ))}
          </div>
        </div>
      </PageAnimate>
    );
};

export default Projects;