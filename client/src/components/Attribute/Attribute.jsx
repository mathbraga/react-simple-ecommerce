import React, { PureComponent } from "react";
import styled from "styled-components";

const Styles = styled.div`
    .attribute-title{
        font-family: ${props => props.minified ? 'Raleway' : 'Roboto Condensed'}, sans-serif;
        font-size: ${props => props.minified ? '0.875rem' : '1.125rem'};
        font-weight: ${props => props.minified ? '400' : '700'};
    }

    .attribute-options{
        display: flex;
        gap: 8px;
        flex-wrap: wrap;

        div{
            font-family: 'Source Sans Pro', sans-serif;
            font-weight: 400;
            font-size: ${props => props.minified ? '0.875rem' : '1rem'};

            border: 1px solid black;
            min-width: ${props => props.minified ? '24px' : '63px'};
            min-height: ${props => props.minified ? '24px' : '45px'};

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
        width: ${props => props.minified ? '16px' : '32px'};
        height: ${props => props.minified ? '16px' : '32px'};
        border: 1px solid var(--color-black);

        background-color: ${props => props.color};
        cursor: pointer;

        &.color-selected{
            width: ${props => props.minified ? '16px' : '34px'};
            height: ${props => props.minified ? '16px' : '34px'};
            border: none;
        }
    }
`;

class Attribute extends PureComponent{
    constructor(props){
        super(props);

        this.state = {
            selected: this.props.selection || 0
        }
    }

    isSelectedAttribute = (index) => {
        return index === this.state.selected;
    }

    selectAttribute = (index) => {
        this.setState(() => {
            return {selected: index}
        });

        this.props.onClick(index, this.props.refIndex);
    }

    render(){
        const {
            name,
            items,
            type
        } = this.props.attribute;
        const { minified } = this.props;
        const isSwatch = type === "swatch";

        return(
            <Styles minified={minified}>
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
                                minified={minified}
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