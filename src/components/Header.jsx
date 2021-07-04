import React from 'react'

function Header(props) {
    return (
        <div className="header">
            <div className="cart-item-store" >
                <div className="cart-container">
                    <div className="cart-icon">
                        <img src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-sale-shopping-cart-icon-vector-170609053.jpg" alt="1" />
                    </div>
                    <div className="cart-count">
                        {props.data.length}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
