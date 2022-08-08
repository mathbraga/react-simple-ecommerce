import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import Title from "../components/Title";
import PageContainer from "../containers/PageContainer";

const Styles = styled.div`
    .empty-message{
        display: flex;
        justify-content: center;

        font-weight: bold;
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
        const itemIds = Object.keys(cartItems);

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
                        <Items>
                            {itemIds.map((id, index) => 
                                cartItems[id].map(
                                    (item, innerIdx) => 
                                        <CartItem 
                                            key={`${index}${innerIdx}`}
                                            product={item}
                                            productId={id}
                                            refIndex={innerIdx}
                                        />
                                )
                            )}
                        </Items>
                        : <div className="empty-message">No items in cart.</div>
                    }
                </Styles>
            </PageContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartPage);
