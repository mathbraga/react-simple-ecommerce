import React, { PureComponent } from "react";
import styled from "styled-components";
import Price from "../Price";
import Title from "../Title";
import Attribute from "../Attribute";
import addIcon from "../../assets/icons/plus-square.svg";
import removeIcon from "../../assets/icons/minus-square.svg";

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
        gap: 24px;

        & > img{
            height: fill;
            width: 200px;

            align-self: center;
        }

        .product-amount{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            font-size: 1.5rem;
            font-weight: 500;

            .quantity-btn{
                height: 45px;
                width: 45px;
            }
        }
    }
`;

class CartItem extends PureComponent {
    render(){
        const {
            name,
            brand,
            prices,
            gallery,
            attributes,
            selectedAttributes,
            amount
        } = this.props.product;

        return(
            <Styles>
                <div className="details-section">
                    <div>
                        <Title size="1.875rem" weight="600">{brand}</Title>
                        <Title size="1.875rem" weight="400">{name}</Title>
                    </div>
                    <Price size="1.5rem" weight="700" priceList={prices} />
                    <div className="attributes">
                        {attributes.map(
                            (item, index) => 
                                <Attribute 
                                    attribute={item}
                                    key={index}
                                    refIndex={index}
                                    selection={selectedAttributes[index]}
                                />
                        )}
                    </div>
                </div>
                <div className="image-section">
                    <div className="product-amount">
                        <div className="quantity-btn">
                            <img src={addIcon} alt="add product" />
                        </div>
                        {amount}
                        <div className="quantity-btn">
                            <img src={removeIcon} alt="remove product" />
                        </div>
                    </div>
                    <img src={gallery[0]} alt="test" />
                </div>
            </Styles>
        )
    }
}

export default CartItem;
