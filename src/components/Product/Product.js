import React from 'react'
import './Product.css'
import Cart from '../Cart/Cart'
const Product = (props) => {
    return (
        <div>
            <div>
                <img src='#' alt='#'/>
            </div>
            <div>
                <h3>PRODUCT NAME</h3>
                <h4>Cost</h4>
                <p>Product Description</p>
                <button>Add to Cart</button>
            </div>
            <div>
                <h2>REVIEWS</h2>
                <p>Review Text</p>
            </div>
            <form>
                <input type= 'text' placeholder= 'Name'></input> 
                <input type= 'text' placeholder= 'Date'></input>
                <input type= 'text' placeholder= 'Rating'></input>
                <input type= 'text' placeholder= 'Review'></input>
                <input type= 'submit'></input>
            </form>
            <Cart />
        </div>
    )
}
export default Product