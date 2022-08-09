const initLocalStorage = () => {
    if(!localStorage.getItem("currency")){
        localStorage.setItem("currency", 0);
    }
    if(!localStorage.getItem("cartItems")){
        localStorage.setItem("cartItems", JSON.stringify({cartAmount: 0}));
    }
}

export default initLocalStorage;
