import React, { PureComponent } from "react";
import ImageList from "./ImageList";
import styled from "styled-components";

const ImageSliderStyles = styled.div`
    max-height: 332px;
    overflow: hidden;
`;

class ImageSlider extends PureComponent {
    render(){
        return(
            this.props.images.length > 1 ?
                <ImageSliderStyles>
                    <ImageList 
                        images={this.props.images}
                        imageSelector={this.props.imageSelector}
                        offset={this.props.offset}
                    />
                </ImageSliderStyles> : null
        );
    }
}

export default ImageSlider;
