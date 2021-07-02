import constants from "../constants"

const initialState = {
    cartData:[]
}

export default function cartItem(state =  initialState ,action){
    switch(action.type){
        case constants.ADD_TO_CART:
            return{
                ...state , 
                cartData: action.state
            }
            break;
        default:
            return{
                state
            }
            break;
    }
}