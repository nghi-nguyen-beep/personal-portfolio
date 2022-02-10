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
            repo: this.props.repo,
            tech: this.props.tech,
            description: this.props.description,
        }
    }

    render() {
        return(
            <div className= "project-piece-item">
                <div className= "project-piece-img-container">
                    <img src={this.state.src} alt={this.state.title} className= "project-piece-img" />
                </div>
                <div className= "project-piece-img-description">
                    <div className= "project-piece-img-description-title">{this.state.title}</div>
                    <ul>
                        <li>{this.state.tech}</li>
                        <li><a href= {this.state.link} target= "_blank" rel="noopener noreferrer">website</a> </li>
                        <li><a href= {this.state.repo} target= "_blank" rel="noopener noreferrer">source code</a> </li>
                        <li>{this.state.description}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ProjectPiece;