const initLocalStorage = () => {
    if(!localStorage.getItem("currency")){
        localStorage.setItem("currency", "$");
    }
}

export default initLocalStorage;
