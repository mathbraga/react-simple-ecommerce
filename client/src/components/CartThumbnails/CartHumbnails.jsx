import React, { PureComponent } from "react";
import styled from "styled-components";

const Styles = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    .img-container{
        display: flex;
        align-items: center;
        width: ${props => props.width};
        overflow: hidden;

        img{
            height: fill;
            width: ${props => props.width};
        }
    }

    .thumb-slider{
        position: absolute;
        bottom: 0;
        right: 0;

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
            counter: 0
        }
    }

    updateCounter = (updateValue) => {
        this.setState((state) => ({
            counter: state.counter + updateValue
        }));
    }

    render(){
        const { images, width } = this.props;

        return(
            <Styles width={width} counter={this.state.counter}>
                <div className="img-container">
                    {images.map((image, index) => 
                        <img key={index} src={image} alt="thumbnails" />
                    )}
                </div>
                <div className="thumb-slider">
                    <div>{"<"}</div>
                    <div onClick={() => this.updateCounter(1)}>{">"}</div>
                </div>
            </Styles>
        )
    }
}

export default CartThumbnails;
