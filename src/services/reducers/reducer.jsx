import * as Constants from "../constants"

const initialState = {
    cartData:[]
}

export default function cartItem(state = [] ,action){
    
    switch(action.type){
        case Constants.ADD_TO_CART:
            return[
                ...state, 
                {cartData: action.data}
            ]
        case Constants.REMOVE_TO_CART:
            state.pop()
            return[
                ...state,
            ]
        default:
            return state           
    }
}