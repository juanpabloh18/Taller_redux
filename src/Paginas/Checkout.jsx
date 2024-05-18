
import { useSelector, useDispatch } from "react-redux";
import { removefromCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";


function checkout() {
    const cartitems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    return (
        <div className="bg-body-tertiary">
            <div className="d-flex justify-content-betwenn px-4 bg-dark text-white align-items-center">
                <h2>Cart Items</h2>
               <Link to="/"> <h2 className="d-flex justify-content-betwenn px-4 bg-dark text-white align-items-right">casa</h2></Link>
            </div>
            <div>
                {
                    cartitems.map(item => {
                        return (
                            <div className="container d-flex flex-wrap mt-5">
                                <img src={item.image} className="border w-5" />
                                <div>
                                    <h4>{item.title}</h4>
                                    <button className="btn btn-warning btn-sm"
                                        onClick={() => dispatch(removefromCart({ id: item.id }))}
                                    >Remove</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default checkout;