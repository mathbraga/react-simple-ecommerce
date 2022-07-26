import React, { PureComponent } from "react";
import styled from "styled-components";

const ImageListStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 36px;

    transform: ${props => `translateY(calc(-120px*${props.offset}))`};
    transition: all 250ms;

    div{
        cursor: pointer;
    }

    img{
        height: 80px;
        width: fill;
    }
`;

class ImageList extends PureComponent {
    render(){
        return(
            <ImageListStyles offset={this.props.offset}>
                {this.props.images.map(
                    (item, index) =>
                        <div key={index} onClick={() => this.props.imageSelector(index)}>
                            <img src={item} alt={index} />
                        </div>
                )}
            </ImageListStyles>
        );
    }
}

export default ImageList;
