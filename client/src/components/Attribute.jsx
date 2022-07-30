import React, { PureComponent } from "react";
import styled from "styled-components";

const Styles = styled.div`
    .attribute-title{
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 1.125rem;
        font-weight: 700;
    }

    .attribute-options{
        display: flex;
        gap: 12px;
        flex-wrap: wrap;

        div{
            font-family: 'Source Sans Pro', sans-serif;
            font-weight: 400;
            font-size: 1rem;

            border: 1px solid black;
            width: 63px;
            height: 45px;

            display: flex;
            justify-content: center;
            align-items: center;

            cursor: pointer;
        }

        .selected{
            color: white;
            background-color: var(--color-black);
        }
    }
`;

class Attribute extends PureComponent{
    constructor(props){
        super(props);

        this.state = {
            selected: 0
        }
    }

    handleSelectedAttribute = (index) => {
        return index === this.state.selected ? "selected" : "";
    }

    selectAttribute = (index) => {
        this.setState(() => {
            return {selected: index}
        });
    }

    render(){
        return(
            <Styles>
                <div className="attribute-title">{`${this.props.attribute.name}:`}</div>
                <div className="attribute-options">
                    {this.props.attribute.items.map(
                        (item, index) => 
                            <div 
                                key={index}
                                className={this.handleSelectedAttribute(index)}
                                onClick={() => this.selectAttribute(index)}
                            >
                                {item.value}
                            </div>
                    )}
                </div>
            </Styles>
        )
    }
}

export default Attribute;