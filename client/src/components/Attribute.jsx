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

        .attribute-selected{
            color: white;
            background-color: var(--color-black);
        }
    }

    .swatch{
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;

const SwatchType = styled.div`
    width: 32px;
    height: 32px;

    background-color: ${props => props.color};
    cursor: pointer;

    &.attribute-selected{
        border: 1px solid #5ECE7B;
        width: 36px;
        height: 36px;
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
        return index === this.state.selected ? "attribute-selected" : "";
    }

    selectAttribute = (index) => {
        this.setState(() => {
            return {selected: index}
        });
    }

    render(){
        const {
            name,
            items,
            type
        } = this.props.attribute;
        const isSwatch = type === "swatch";

        return(
            <Styles>
                <div className="attribute-title">{`${name}:`}</div>
                <div className={isSwatch ? "swatch" : "attribute-options"}>
                    {items.map(
                        (item, index) => 
                            isSwatch ?
                            <SwatchType 
                                color={item.value} 
                                key={index}
                                className={this.handleSelectedAttribute(index)}
                                onClick={() => this.selectAttribute(index)}
                            /> :
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