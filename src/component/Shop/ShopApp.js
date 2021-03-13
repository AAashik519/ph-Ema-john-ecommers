import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './ShopAPP.css'



const ShopApp = () => {

    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    const [cart , setCart] = useState([])

    const handelAddProduct = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
    }


    return (
        <div className="shop-container">
            <div className="product-container">
                {
               
                 product.map(pd => <Product 
                    product={pd}
                    handelAddProduct = {handelAddProduct}
                    
                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart  cart= {cart}/>
            </div>

        </div>
    );
};

export default ShopApp;