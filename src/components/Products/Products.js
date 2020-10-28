import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

const Products = (props) => {
    // console.log('Products props- ', props)
    const {products} = props
    const loaded = () => (
        <div>
              {products.map((ele, ind) => (
                  <Link key={ind} to= {`/products/${products[ind]._id}`}>
                    <div>
                        <img src={products[ind].img} alt={products[ind].product}/>
                        <p>{products[ind].product}</p>
                    </div>  
                </Link>
            ))}
        </div>  
    )
    return products.length > 0 ? loaded(): <h1>Products loading</h1>
}
export default Products