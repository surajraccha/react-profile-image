import React from 'react';
import PropTypes from "prop-types";

class ReactProfileImage extends React.Component{

    constructor(props){
      super();
      this.state = {
          isHover: false,
    };
    }

render(){
   
    const {imageURL,imageWidth,imageHeight,borderRadius,borderColor,borderWidth,hoverEffect} =this.props;

    return (
        <div 
            onMouseEnter={() => this.setState({ isHover: true })}
            onMouseLeave={() => this.setState({ isHover: false })}
            style={{
                    width: `${imageWidth}px`,
                    height: `${imageHeight}px`,
                    borderRadius: `${borderRadius/2}%`,
                    // display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "all 0.5s ease",
                    transform:`${hoverEffect && this.state.isHover ? "scale(1.1)":"scale(1)"}`
                    }}
        >
        <img style={{
                     borderRadius:`${borderRadius/2}%`,
                     width:`${imageWidth - borderWidth*2}px`,
                     height:`${imageHeight - borderWidth*2}px`,
                     borderColor:`${borderColor}`,
                     borderStyle:'solid',
                     borderWidth:`${borderWidth > 10 ? 10 :borderWidth}px`
                     
                     }} 
             src={imageURL}></img>
        </div>
    );
}
}

ReactProfileImage.propTypes = {
  imageWidth: PropTypes.string.isRequired,
  imageHeight: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  borderRadius: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  borderWidth:PropTypes.string.isRequired,
  hoverEffect:PropTypes.bool.isRequired
};



ReactProfileImage.defaultProps = {
  imageWidth: "200",
  imageHeight: "200",
  borderRadius: "100",
  borderColor:"#800080",
  borderWidth:5,
  hoverEffect:true
};

export default ReactProfileImage;