import React, { PureComponent } from "react";
import styled from "styled-components";

const MainImageStyles = styled.div`
    justify-self: center;

    img{
        height: 511px;
        width: fill;
    }
`;

class MainImage extends PureComponent{
    render(){
        return(
            <MainImageStyles>
                <img src={this.props.image} alt="Main" />
            </MainImageStyles>
        )
    }
}

export default MainImage;