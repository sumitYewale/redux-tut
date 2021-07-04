import Header from "../components/Header";
import {connect} from 'react-redux'

const mapToStateProps = (state) => ({
    data: state.cartItem
})

const mapToDispatchProps = (dispatch) => {
    
}

export default connect( mapToStateProps, mapToDispatchProps)(Header)