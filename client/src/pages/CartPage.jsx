import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import Title from "../components/Title";
import PageContainer from "../containers/PageContainer";
import returnTotalPrice from "../utils/returnTotalPrice";

const Styles = styled.div`
    .empty-message{
        display: flex;
        justify-content: center;

        font-weight: bold;
    }

    .cart-details{
        font-size: 1.5rem;

        margin-top: 32px;
        width: 240px;

        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 8px 4px;

        .emph{
            font-weight: 500;
        }
    
        .highlight{
            font-weight: 700;
        }

        .order-btn{
            font-size: 0.875rem;
            font-weight: 600;
            padding: 20px;
            margin-top: 16px;

            grid-column: 1 / 3;

            :active{
                background-color: var(--color-smooth-green-dark);
            }
        }
    }
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;

    & > div{
        border-bottom: 1px solid #e5e5e5;
        padding: 24px 0;
    }

    & > :last-child{
        border-bottom: none;
    }
`;

class CartPage extends PureComponent {
    render(){
        const { cartAmount, ...cartItems } = this.props.cartItems;
        const { currency } = this.props;
        const itemIds = Object.keys(cartItems);
        const currencySymbol = itemIds.length ? 
                    cartItems[itemIds[0]].data.prices[currency].currency.symbol : "";

        return(
            <PageContainer>
                <Styles>
                    <Title
                        size="2rem"
                        weight="700"
                        bottomSpace="52px"
                    >
                        {this.props.pageTitle}
                    </Title>
                    {cartAmount ? 
                        <div>
                            <Items>
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
                                                />
                                            )
                                        }
                                    ))
                                })}
                            </Items>
                            <div className="cart-details">
                                <div>Tax 21%:</div>
                                <div className="highlight">
                                    {`${currencySymbol}${(returnTotalPrice(cartItems, currency)*0.21).toFixed(2)}`}
                                </div>

                                <div>Quantity:</div>
                                <div className="highlight">{cartAmount}</div>

                                <div className="emph">Total:</div>
                                <div className="highlight">
                                    {`${currencySymbol}${returnTotalPrice(cartItems, currency).toFixed(2)}`}
                                </div>

                                <Button 
                                    color="var(--color-smooth-green)"
                                    textColor="white"
                                    className="order-btn"
                                >
                                    ORDER
                                </Button>
                            </div>
                        </div>
                        : <div className="empty-message">No items in cart.</div>
                    }
                </Styles>
            </PageContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems,
    currency: state.currency.defaultCurrency
});

export default connect(mapStateToProps)(CartPage);
