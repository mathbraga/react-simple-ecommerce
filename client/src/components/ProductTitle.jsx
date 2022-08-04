import React, { PureComponent } from "react";
import styled from "styled-components";

const Styles = styled.div`
    font-size: ${props => props.size ? props.size : 'inherit'};
    font-weight: ${props => props.weight ? props.weight : 'inherit'};
`;

class ProductTitle extends PureComponent {
    render(){
        const {
            size,
            weight
        } = this.props;

        return(
            <Styles size={size} weight={weight}>
                {this.props.children}
            </Styles>
        );
    }
}

export default ProductTitle;
