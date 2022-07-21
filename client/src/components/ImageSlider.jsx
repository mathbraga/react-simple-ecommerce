import React, { PureComponent } from "react";
import arrowUp from "../assets/icons/arrow-up.svg";
import arrowDown from "../assets/icons/arrow-down.svg";
import ImageList from "./ImageList";
import styled from "styled-components";

const ImageSliderStyles = styled.div`
    .slider-arrow{
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
    }

    .slider-arrow-disabled{
        display: flex;
        justify-content: center;
        align-items: center;

        pointer-events: none;
        opacity: 0.2;
    }
`;

class ImageSlider extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            carouselReference: 1
        }
    }

    handleClick = (offset) => {
        const galleryLength = this.props.images.length;
        const currentReference = this.state.carouselReference;
        const finalReference = 
            currentReference + offset < 1 ? 
            1 :
            (currentReference + offset > galleryLength-2 ? 
                galleryLength-2 : currentReference + offset);

        this.setState(() => {
            return { carouselReference: finalReference }
        });
    }

    handleArrowClass = (limit) => {
        const galleryLength = this.props.images.length;

        if(galleryLength <= 3){
            return "slider-arrow-disabled";
        }

        return this.state.carouselReference === limit ? "slider-arrow-disabled" : "slider-arrow";
    }

    render(){
        return(
            this.props.images.length > 1 ?
                <ImageSliderStyles>
                    <div 
                        className={this.handleArrowClass(1)} 
                        onClick={() => this.handleClick(-1)}
                    >
                        <img src={arrowUp} alt="Arrow up" />
                    </div>
                    <ImageList 
                        images={this.props.images}
                        imageSelector={this.props.imageSelector}
                        middleIndex={this.state.carouselReference}
                    />
                    <div 
                        className={this.handleArrowClass(this.props.images.length-2)} 
                        onClick={() => this.handleClick(1)}
                    >
                        <img src={arrowDown} alt="Arrow down" />
                    </div>
                </ImageSliderStyles> : null
        );
    }
}

export default ImageSlider;
