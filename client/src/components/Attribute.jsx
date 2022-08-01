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
    &.swatch-selected{
        padding: 1px;
        border: 1px solid #5ECE7B;
    }

    div{
        width: 32px;
        height: 32px;
        border: 1px solid var(--color-black);

        background-color: ${props => props.color};
        cursor: pointer;

        &.color-selected{
            width: 35px;
            height: 35px;
            border: none;
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

    isSelectedAttribute = (index) => {
        return index === this.state.selected;
    }

    selectAttribute = (index, value) => {
        const { name } = this.props.attribute;

        this.setState(() => {
            return {selected: index}
        });

        this.props.onClick(name, value);
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
                                className={this.isSelectedAttribute(index) ? "swatch-selected" : ""}
                                onClick={() => this.selectAttribute(index, item.value)}
                            >
                                <div 
                                    className={this.isSelectedAttribute(index) ? "color-selected" : ""} 
                                />
                            </SwatchType> :
                            <div 
                                key={index}
                                className={this.isSelectedAttribute(index) ? "attribute-selected" : ""}
                                onClick={() => this.selectAttribute(index, item.value)}
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