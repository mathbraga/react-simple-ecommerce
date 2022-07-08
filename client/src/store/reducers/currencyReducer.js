const initialState = {
    defaultCurrency: localStorage.currency || "$"
}

const currencyReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default currencyReducer;
