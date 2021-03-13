import React from 'react';
import '../Product/Product.css'
import './Cart.css'

const Cart = (props) => {
    const cart= props.cart
    let total =0;
    for(let i=0 ; i<cart.length; i++)
    {
        const product= cart[i]
        total  =total  + product.price ;
         
    }
    let shipping= 0;
    if( total >35)
    {
        shipping =0;
    }
    else if( total > 15)
    {
        shipping = 4.99;
    }
    else if (total> 0)
    {
        shipping = 4.99
    }

    const formatNumber = num =>{
        const precision =num.toFixed(2)
        return Number(precision);
    }
 


    return(
        <div className ='cart'>
           <h4> Order Summary :</h4>
           <p> Items Order : {cart.length}</p> 
           <p>Product Price : $ {formatNumber(total) }</p>
           <p><small>Shipping Cost : ${formatNumber(shipping)}</small></p>
           <p className ='totalPrice'>Total Price : $ { formatNumber( total+shipping) }</p>
           <button className= 'main-button'>to review order</button>
        </div>
    );
};

export default Cart;