import React, { PureComponent } from "react";
import ImageSlider from "../ImageSlider";
import arrowUp from "../../assets/icons/arrow-up.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";
import styled from "styled-components";

const Styles = styled.div`
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

class ImageSelector extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            slideLimiter: 0
        }
    }

    handleArrowClass = (limit) => {
        if(this.state.slideLimiter === limit){
            return "slider-arrow-disabled";
        }

        return "slider-arrow";
    };

    handleArrowClick = (offset) => {
        this.setState((state) => {
            return { slideLimiter: state.slideLimiter + offset }
        })
    }

    render(){
        const isArrowVisible = this.props.gallery.length > 3;

        return(
            <Styles>
                {isArrowVisible ?
                <div 
                    className={this.handleArrowClass(0)} 
                    onClick={() => this.handleArrowClick(-1)}
                >
                    <img src={arrowUp} alt="Arrow up" />
                </div> : null}
                <ImageSlider 
                    offset={this.state.slideLimiter} 
                    images={this.props.gallery}
                    imageSelector={this.props.imageSelector} 
                />
                {isArrowVisible ?
                <div 
                    className={this.handleArrowClass(this.props.gallery.length - 3)}
                    onClick={() => this.handleArrowClick(1)}
                >
                    <img src={arrowDown} alt="Arrow down" />
                </div> : null}
            </Styles>
        )
    }
}

export default ImageSelector;
