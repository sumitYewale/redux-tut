import React from 'react'

function Home(props) {
    return (
        <div>
            <h1>Products</h1>
            <div className="cart-wrapper">
                <div className="product-container">
                    <div className="img-wrapper item">
                        <img src="https://www.pngitem.com/pimgs/m/525-5259250_apple-ios-13-iphone-hd-png-download-apple.png" alt="2" />
                    </div>
                    <div className="text-wrapper item">
                        <span>IPhone 11</span>
                        <span>Price: $1000.00</span>
                    </div>
                    <div className="btn-wrapper item">
                        <button onClick={() => props.addToCartHandler({price:1000, name:'Iphone 11'})} >+</button>
                        <button onClick={() => props.removeToCartHandler()} >-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
