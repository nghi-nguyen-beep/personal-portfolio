import React, {Component} from "react";
import "../pages/includes/css/artPiece.css";

class ArtPiece extends Component {
    constructor(props) {
        super(props);
        this.expandImage = this.expandImage.bind();
        this.state = {
            originalWidth: this.props.width,
            originalHeight: this.props.height,
            width: this.props.width,
            height: this.props.height,
            src: this.props.src,
            title: this.props.title,
            id: this.props.id,
            imageExpanded: false,
            zIndex: 1,
            opacity: null,
            top: null,
            left: null,
        }
    }

    expandImage = (newWidth, newHeight) => {
        if (this.state.imageExpanded) {
            this.setState({width: this.state.originalWidth, height: this.state.originalHeight, imageExpanded: false,  opacity: null, top: 0, left: 0});
        } else {
            this.setState({width: newWidth, height: newHeight, imageExpanded: true,  opacity: 1, top: 0, left: 0});
        }
    };

    render() {
        return(
            <div className= "art-piece-container" style={{width: this.state.width, height: this.state.height, top: this.state.top, left: this.state.left}}>
                <div className= "art-image-description" style={{width: this.state.width / 5, height: this.state.height / 5, top: this.state.top, left: this.state.left}}> {this.state.title} </div>
                <img className= "art-image" src= {this.state.src} alt= {this.state.id} style={{width: this.state.width, height: this.state.height, opacity: this.state.opacity, top: this.state.top, left: this.state.left}}/>
            </div>
        )
    }
}

export default ArtPiece;