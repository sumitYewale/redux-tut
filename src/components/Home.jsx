import React from 'react'

function Home() {
    return (
        <div>
            <div className="header">
                <div className="cart-item-store" >
                    <div className="cart-container">
                        <div className="cart-icon">
                            <img src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-sale-shopping-cart-icon-vector-170609053.jpg" />
                        </div>
                        <div className="cart-count">
                            2
                        </div>
                    </div>
                </div>
            </div>
            <h1>Products</h1>
            <div className="cart-wrapper">
                <div className="product-container">
                    <div className="img-wrapper item">
                        <img src="https://www.pngitem.com/pimgs/m/525-5259250_apple-ios-13-iphone-hd-png-download-apple.png" />
                    </div>
                    <div className="text-wrapper item">
                        <span>I-Phone</span>
                        <span>Price: $1000.00</span>
                    </div>
                    <div className="btn-wrapper item">
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
