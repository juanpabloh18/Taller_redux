import React from "react";
import { useDispatch } from 'react-redux';
import { addtoCart } from "../redux/CartSlice";

function Product ( {id,title, image}){
    const dispatch = useDispatch()

    return(
        <div>
            <h3>{title}</h3>
            <img src={image} className="w-50"/>
            <br />
            <button className='btn btn-warning btn-sm' onClick={() => dispatch(addtoCart({id,title, image}))}>
                add to cart
                </button>
        </div>

    );
}
    
export default Product;