export const shoppingReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state, //returning current state of basket, with the new state
                basket: [...state.basket, action.payload]
            };
        case 'REMOVE_FROM_BASKET':
            const newBasket = [...state.basket]
            const newArray = newBasket.filter((basketItem) => basketItem.id !== action.payload.id)
            return {
                ...state,
                basket: newArray
            };
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};