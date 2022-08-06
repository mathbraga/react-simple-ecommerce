import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import PageTitle from "../components/PageTitle";
import PageContainer from "../containers/PageContainer";

const Items = styled.div`
    display: flex;
    flex-direction: column;

    & > div{
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        padding: 24px 0;
    }

    & > :first-child{
        border-bottom: none;
    }

    & > :last-child{
        border-top: none;
    }
`;

class CartPage extends PureComponent {
    render(){
        const { cartAmount, ...cartItems } = this.props.cartItems;
        const itemIds = Object.keys(cartItems);

        return(
            <PageContainer>
                <PageTitle
                    size="2rem"
                    weight="700"
                    bottomSpace="52px"
                >
                    {this.props.pageTitle}
                </PageTitle>
                {cartAmount ? 
                    <Items>
                        {itemIds.map((items, index) => 
                            cartItems[items].map(
                                (item, innerIdx) => 
                                    <CartItem 
                                        key={`${index}${innerIdx}`}
                                        product={item} 
                                    />
                            )
                        )}
                    </Items>
                    : null
                }
            </PageContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartPage);
