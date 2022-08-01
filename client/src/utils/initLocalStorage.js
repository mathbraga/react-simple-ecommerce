const initLocalStorage = () => {
    if(!localStorage.getItem("currency")){
        localStorage.setItem("currency", "$");
    }
    if(!localStorage.getItem("cartItems")){
        localStorage.setItem("cartItems", "[]");
    }
}

export default initLocalStorage;
