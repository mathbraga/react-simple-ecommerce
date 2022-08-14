import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { updateItemAmount } from "../../store/reducers/cartSlice";
import styled from "styled-components";
import Price from "../Price";
import Title from "../Title";
import Attribute from "../Attribute";
import addIcon from "../../assets/icons/plus-square.svg";
import removeIcon from "../../assets/icons/minus-square.svg";
import CartThumbnails from "../CartThumbnails";

const Styles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    .details-section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 16px;

        .attributes{
            pointer-events: none;

            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    }

    .image-section{
        display: flex;
        gap: ${props => props.minified ? "8px" : "24px"};
        align-items: stretch;
        height: auto;

        .product-amount{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: auto;

            font-size: ${props => props.minified ? "1rem" : "1.5rem"};
            font-weight: 500;

            .quantity-btn{
                height: ${props => props.minified ? "23px" : "45px"};
                width: ${props => props.minified ? "23px" : "45px"};
                border: 1px solid black;

                display: flex;
                justify-content: center;
                align-items: center;

                img{
                    width: ${props => props.minified ? "15px" : "24px"};
                    height: ${props => props.minified ? "15px" : "24px"};
                }
                
                cursor: pointer;
            }
        }
    }
`;

class CartItem extends PureComponent {
    handleClick = (event, updateValue, productId, itemAttributes) => {
        event.stopPropagation();

        this.props.updateQuantity(updateValue, productId, itemAttributes);
    }

    render(){
        const {
            name,
            brand,
            prices,
            gallery,
            attributes
        } = this.props.product;
        const { productId, quantity, 
            selectedAttributes, minified } = this.props;
        const selections = JSON.parse(selectedAttributes);

        return(
            <Styles minified={minified}>
                <div className="details-section">
                    <div>
                        <Title 
                            size={minified ? "1rem" : "1.875rem"} 
                            weight={minified ? "300" : "600"}
                        >
                            {brand}
                        </Title>
                        <Title 
                            size={minified ? "1rem" : "1.875rem"} 
                            weight={minified ? "300" : "400"}
                        >
                            {name}
                        </Title>
                    </div>
                    <Price 
                        size={minified ? "1rem" : "1.5rem"}
                        weight={minified ? "500" : "700"}
                        priceList={prices} 
                    />
                    <div className="attributes">
                        {attributes.map(
                            (item, index) => 
                                <Attribute 
                                    attribute={item}
                                    key={index}
                                    refIndex={index}
                                    selection={selections[index]}
                                    minified={minified}
                                />
                        )}
                    </div>
                </div>
                <div className="image-section">
                    <div className="product-amount">
                        <div 
                            className="quantity-btn" 
                            onClick={(event) => this.handleClick(event, 1, productId, selectedAttributes)}
                        >
                            <img src={addIcon} alt="add product" />
                        </div>
                        {quantity}
                        <div 
                            className="quantity-btn" 
                            onClick={(event) => this.handleClick(event, -1, productId, selectedAttributes)}
                        >
                            <img src={removeIcon} alt="remove product" />
                        </div>
                    </div>
                    <CartThumbnails 
                        images={minified ? [gallery[0]] : gallery}
                        width={minified ? "120px" : "200px"}
                        uniqueIdx={minified ? "" : this.props.uniqueIndex} 
                    />
                </div>
            </Styles>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateQuantity: (updateValue, productId, itemAttributes) => 
        dispatch(updateItemAmount({ updateValue, productId, itemAttributes }))
});

export default connect(null, mapDispatchToProps)(CartItem);
