import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import returnTotalPrice from "../../utils/returnTotalPrice";
import Button from "../Button";
import CartItem from "../CartItem";

const Styles = styled.div`
    position: absolute;
    top: 100%;
    right: 60px;
    height: auto;
    width: 325px;

    padding: 32px 16px;

    background-color: white;

    z-index: 99;

    display: flex;
    flex-direction: column;
    gap: 32px;

    font-size: 1rem;

    .cart-items{
        max-height: 420px;
        overflow-y: auto;
        margin-right: -6px;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        gap: 40px;

        ::-webkit-scrollbar{
            width: 6px;
        }

        ::-webkit-scrollbar-track{
            background: hsl(0 0% 80% / 1);
            border-radius: 100vw;
            margin-block: .5em;
        }

        ::-webkit-scrollbar-thumb{
            background: hsl(0 0% 40% / 1);
            border-radius: 100vw;
        }

        // scrollbar for mozilla
        @supports (scrollbar-color: red blue){
            &{
                scrollbar-color: hsl(0 0% 40% / 1) hsl(0 0% 80% / 1);
                scrollbar-width: thin;
            }
        }
    }

    .cart-price{
        display: flex;
        justify-content: space-between;
    }

    .btn-section{
        display: flex;
        justify-content: space-between;

        .btn-overlay{
            padding: 16px 0;
            width: 140px;
            border: 1px solid var(--color-smooth-green);

            font-family: "Raleway", sans-serif;
            font-size: 0.875rem;
            font-weight: 600;
        }

        .btn-bag{
            border: 1px solid var(--color-black);
        }
    }
`;

class CartOverlay extends PureComponent {
    // closeMenu = (event) => {
    //     const notButtonOrMenu = event.target.id !== this.props.triggererId;

    //     if(notButtonOrMenu){
    //         this.props.trigger();
    //     }
    // }

    // componentDidMount = () => {
    //     document.addEventListener("click", this.closeMenu);
    // }

    // componentWillUnmount = () => {
    //     document.removeEventListener("click", this.closeMenu);
    // }

    render(){
        const { quantity, cartItems, currency } = this.props;
        const itemIds = Object.keys(cartItems);
        const currencySymbol = itemIds.length ? 
                cartItems[itemIds[0]].data.prices[currency].currency.symbol : "";

        return(
            <Styles>
                <div style={{fontWeight: "700"}}>
                    My bag, <span style={{fontWeight: "500"}}>{quantity} items</span>
                </div>
                <div className="cart-items">
                    {itemIds.map(id => {
                        let itemEntries = Object.keys(cartItems[id].itemEntriesByAttributes);

                        return(itemEntries.map(
                            item => {
                                let uniqueId = `${id}${item}`
                                let quantity = cartItems[id].itemEntriesByAttributes[item];

                                return(
                                    <CartItem 
                                        key={uniqueId}
                                        uniqueIndex={uniqueId}
                                        product={cartItems[id].data}
                                        quantity={quantity}
                                        selectedAttributes={item}
                                        productId={id}
                                        minified
                                    />
                                )
                            }
                        ))
                    })}
                </div>
                <div className="cart-price">
                    <span style={{fontFamily: "'Roboto', sans-serif", fontWeight: "500"}}>Total</span>
                    <span style={{fontWeight: "700"}}>
                        {currencySymbol}{returnTotalPrice(cartItems, currency).toFixed(2)}
                    </span>
                </div>
                <div className="btn-section">
                    <Link to="/cart">
                        <Button className="btn-overlay btn-bag">
                            VIEW BAG
                        </Button>
                    </Link>
                    <Button 
                        className="btn-overlay"
                        textColor="white" 
                        color="var(--color-smooth-green)"
                    >
                        CHECK OUT
                    </Button>
                </div>
            </Styles>
        )
    }
}

export default CartOverlay;
