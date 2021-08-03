import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css'


const Product = (props) => {
   // console.log(props.product.name)(
   
  // console.log(props)
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
           </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock-order</small></p>
                <button onClick={()=>props.handleAddProduct(props.product)} className="main" >
                    <FontAwesomeIcon icon={faShoppingCart} />Click the button</button>
            </div>


     </div>
    );
};

export default Product;