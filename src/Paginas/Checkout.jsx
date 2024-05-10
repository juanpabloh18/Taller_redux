
import { useSelector, useDispatch } from "react-redux";
import { removefromCart } from "../redux/CartSlice";


function checkout (){
    const cartitems = useSelector (state => state.cart.cart)
    const dispatch = useDispatch()
    return(
       <div>
        <h2>Cart Items</h2>
        {
            cartitems.map(item =>{
                return(
                    <div className="d-flex">
                        <img src={item.image} className="c-image"/>
                        <div>
                            <h4>{item.title}</h4>
                            <button className="btn btn-warning btn-sm"
                            onClick={() =>dispatch(removefromCart({id:item.id}))}
                            >Remove</button>
                        </div>
                    </div>
                )
            })
        }
       </div>
    );
}

export default checkout;