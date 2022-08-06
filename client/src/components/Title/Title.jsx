import React, { PureComponent } from "react";
import styled from "styled-components";

const Styles = styled.div`
    font-size: ${props => props.size ? props.size : 'inherit'};
    font-weight: ${props => props.weight ? props.weight : 'inherit'};
    margin-bottom: ${props => props.bottomSpace ? props.bottomSpace : '0'};
`;

class Title extends PureComponent {
    render(){
        return(
            <Styles {...this.props} >
                {this.props.children}
            </Styles>
        );
    }
}

export default Title;
