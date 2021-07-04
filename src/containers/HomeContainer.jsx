import {connect} from 'react-redux'
import {addToCart , removeToCart} from '../services/actions/action'
import Home from "../components/Home"

const mapStateToProps = (state) =>({
    data: state.cartItem
})

const mapDispatchToProps = (dispatch) => ({
    addToCartHandler: (data) => dispatch(addToCart(data)),
    removeToCartHandler: () => dispatch(removeToCart())
})

export default connect(mapStateToProps , mapDispatchToProps)(Home)