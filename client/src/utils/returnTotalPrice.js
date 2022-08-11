const returnTotalPrice = (products, currency) => {
    const items = Object.keys(products);
    let totalPrice = 0;

    items.forEach(item => {
        products[item].forEach(product => {
            totalPrice += product.prices[currency].amount*product.amount;
        });
    })

    return totalPrice;
}

export default returnTotalPrice;
