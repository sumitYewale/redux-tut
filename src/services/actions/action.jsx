import * as Constants from "../constants";

export const addToCart = (data) =>{
    return{
        type: Constants.ADD_TO_CART,
        data:data
    }
}

export const removeToCart =() => {
    return({
        type: Constants.REMOVE_TO_CART
    })
}
