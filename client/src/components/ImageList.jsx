import React, { PureComponent } from "react";
import styled from "styled-components";

const ImageListStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;

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
        const middleIndex = this.props.middleIndex;
        const isIndexInInterval = (index) => 
            index >= middleIndex-1 && index <= middleIndex+1;

        return(
            <ImageListStyles>
                {this.props.images.map(
                    (item, index) =>
                        isIndexInInterval(index) ?
                        <div key={index} onClick={() => this.props.imageSelector(index)}>
                            <img src={item} alt={index} />
                        </div> : null
                )}
            </ImageListStyles>
        );
    }
}

export default ImageList;
