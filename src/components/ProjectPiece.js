import React, {Component} from "react";
import "../pages/includes/css/projectPiece.css";

class ProjectPiece extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: this.props.src,
            title: this.props.title,
            id: this.props.id,
            link: this.props.link,
            previewImage: this.props.previewImage,
            previewVideo: this.props.previewVideo,
            previewTitle: this.props.previewTitle,
            previewDescription: this.props.previewDescription,
            previewByline: this.props.previewByline,
            repo: this.props.repo,
            tech: this.props.tech,
            description: this.props.description,
        };
    }

    render() {
        return(
            <div className={`project-piece-item${this.state.previewVideo ? " project-piece-item-video-preview" : ""}`}>
                <div className= "project-piece-img-container">
                    {this.state.previewImage ? (
                        <ProjectWebsitePreview
                            image={this.state.previewImage}
                            video={this.state.previewVideo}
                            title={this.state.previewTitle || this.state.title}
                            description={this.state.previewDescription}
                            byline={this.state.previewByline}
                            projectTitle={this.state.title}
                            tech={this.state.tech}
                            link={this.state.link}
                            repo={this.state.repo}
                            projectDescription={this.state.description}
                            compact
                        />
                    ) : (
                        <img src={this.state.src} alt={this.state.title} className= "project-piece-img" />
                    )}
                    {this.state.previewImage && (
                        <a
                            href={this.state.link}
                            className="project-demo-launch"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View project
                        </a>
                    )}
                </div>
                {!this.state.previewImage && (
                    <div className= "project-piece-img-description">
                        <div className= "project-piece-img-description-title">{this.state.title}</div>
                        <ul>
                            <li>{this.state.tech}</li>
                            <li><a href= {this.state.link} target= "_blank" rel="noopener noreferrer">website</a> </li>
                            <li><a href= {this.state.repo} target= "_blank" rel="noopener noreferrer">source code</a> </li>
                            <li>{this.state.description}</li>
                        </ul>
                    </div>
                )}
            </div>
        )
    }
}

function ProjectWebsitePreview({
    image,
    video,
    title,
    description,
    byline,
    projectTitle,
    tech,
    link,
    repo,
    projectDescription,
    compact = false,
}) {
    return (
        <div
            className={`project-website-preview${compact ? " project-website-preview-compact" : ""}${video ? " project-website-preview-has-motion" : ""}`}
            aria-label={`${title} website preview`}
        >
            {video ? (
                <video autoPlay loop muted playsInline poster={image} aria-hidden="true">
                    <source src={video} type="video/mp4" />
                </video>
            ) : (
                <img src={image} alt="" />
            )}
            <div className="project-website-preview-content">
                <h3>{title}</h3>
                {description && <p>{description}</p>}
                {byline && <small>{byline}</small>}
            </div>
            {compact && (
                <div className="project-website-preview-hover-details">
                    <div className="project-piece-img-description-title">{projectTitle}</div>
                    <ul>
                        <li>{tech}</li>
                        <li><a href={link} target="_blank" rel="noopener noreferrer">website</a></li>
                        <li><a href={repo} target="_blank" rel="noopener noreferrer">source code</a></li>
                        <li>{projectDescription}</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ProjectPiece;