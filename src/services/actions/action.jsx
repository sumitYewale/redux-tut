import constants from "../constants";

export default addToCart = (data) =>{
    return{
        type: constants.ADD_TO_CART,
        data:data
    }
}


