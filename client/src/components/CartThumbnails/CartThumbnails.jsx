import React, { PureComponent } from "react";
import styled from "styled-components";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

const Styles = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;

    .img-container{
        display: flex;
        align-items: center;
        width: ${props => props.width};

        img{
            height: fill;
            width: ${props => props.width};
        }

        transition: all 200ms ease-out;
        transform: translate(calc(${props => `-${props.width}*${props.counter}`}));
    }

    .thumb-slider{
        position: absolute;
        bottom: 4%;
        right: 8%;

        display: flex;
        gap: 8px;

        div{
            cursor: pointer;
        }
    }
`;

class CartThumbnails extends PureComponent{
    constructor(props){
        super(props);

        this.state = {
            counter: this.props.images.length > 1 ? 1 : 0
        }
    }

    removeTransition = () => {
        const { uniqueIdx } = this.props;

        if(this.state.counter === 0){
            document.getElementById(`img-container-${uniqueIdx}`)
                .style.transition = "none";

            this.setState(() => ({
                counter: this.props.images.length
            }));
        }
        else if(this.state.counter === this.props.images.length+1){
            document.getElementById(`img-container-${uniqueIdx}`)
                .style.transition = "none";

            this.setState(() => ({
                counter: 1
            }));
        }
    }

    updateCounter = (updateValue) => {
        const { uniqueIdx } = this.props;

        if(this.state.counter <= 0 || this.state.counter >= this.props.images.length+1) return;
        
        document.getElementById(`img-container-${uniqueIdx}`)
            .style.transition = "all 200ms ease-out";
        this.setState((state) => ({
            counter: state.counter + updateValue
        }));
    }

    componentDidMount = () => {
        const { uniqueIdx } = this.props; 
        const imgContainer = document.getElementById(`img-container-${uniqueIdx}`);

        imgContainer.addEventListener("transitionend", this.removeTransition);
    }

    componentWillUnmount = () => {
        const { uniqueIdx } = this.props; 
        const imgContainer = document.getElementById(`img-container-${uniqueIdx}`);

        imgContainer.removeEventListener("transitionend", this.removeTransition);
    }

    render(){
        const { images, width, uniqueIdx } = this.props;
        const imagesLength = images.length;

        return(
            <Styles width={width} counter={this.state.counter}>
                <div id={`img-container-${uniqueIdx}`} className="img-container">
                    {imagesLength > 1 && <img src={images[imagesLength-1]} alt="thumbnails" />}
                    {images.map((image, index) => 
                        <img key={index} src={image} alt="thumbnails" />
                    )}
                    {imagesLength > 1 && <img src={images[0]} alt="thumbnails" />}
                </div>
                {
                    imagesLength > 1 &&
                    <div className="thumb-slider">
                        <div onClick={() => this.updateCounter(-1)}>
                            <img src={arrowLeft} alt="Arrow left" />
                        </div>
                        <div onClick={() => this.updateCounter(1)}>
                            <img src={arrowRight} alt="Arrow right" />
                        </div>
                    </div>
                }
            </Styles>
        )
    }
}

export default CartThumbnails;
