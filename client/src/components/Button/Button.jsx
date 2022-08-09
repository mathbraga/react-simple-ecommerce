import React, { PureComponent } from "react";
import styled, { css } from "styled-components";

const Styles = styled.button`
    color: ${props => props.textColor || 'inherit'};
    background-color: ${props => props.color || 'inherit'};
    border: none;

    cursor: pointer;
`;

class Button extends PureComponent {
    render(){
        return(
            <Styles {...this.props}>
                {this.props.children}
            </Styles>
        )
    }
}

export default Button;
