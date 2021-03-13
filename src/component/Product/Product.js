import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPeace, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props)
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div className = 'product-img'>
                <img src={img} alt="" />

            </div>
            <div className= 'product-items'>
                <h4 className="product-name">{name}</h4>
                <br />
                <p> <small> by {seller}</small></p>
                <p>$ {price}</p>
                <br />
                <p><small>Only {stock} left in stock</small></p>
                <button className='main-button' onClick={()=> props.handelAddProduct(props.product)}  ><FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>
            </div>


        </div>
    );
};

export default Product;