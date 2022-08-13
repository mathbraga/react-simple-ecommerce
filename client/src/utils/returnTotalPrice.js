const returnTotalPrice = (products, currency) => {
    const items = Object.keys(products);
    let totalPrice = 0;

    items.forEach(item => {
        const price = products[item].data.prices[currency].amount;
        const itemQuantity = products[item].totalInCart;

        totalPrice += price*itemQuantity;
    })

    return totalPrice;
}

export default returnTotalPrice;
