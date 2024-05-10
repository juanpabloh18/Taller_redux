import React from "react";
import Product from "./Product";
import Pantaloneta from "../Img/Pantaloneta.png"
import Guantes from "../Img/Guantes.png"
import Camisa from "../Img/Camisa.png"
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {
    const cartItems = useSelector(state => state.cart.cart)
    return (
        <div className="bg-body-tertiary">
            <div className="d-flex justify-content-betwenn px-4 bg-dark text-white align-items-center">
                <h2>code</h2>
               <Link to="/Checkout"> <h4>cart <small>{cartItems.length}</small></h4></Link>
            </div>
            <div className="container d-flex flex-wrap mt-5">
                <div className="border w-50">
                    <Product
                    id= "1"
                    title={"Pantaloneta"}
                    image={Pantaloneta}
                    />

                </div>
              
            </div>
            <div className="container d-flex flex-wrap mt-5">
                <div className="border w-50">
                    <Product
                    id="2"
                    title={"guantes"}
                    image={Guantes}
                    />

                </div>
              
            </div>
            <div className="container d-flex flex-wrap mt-5">
                <div className="border w-50">
                    <Product
                    id="3"
                    title={"Camisa"}
                    image={Camisa}
                    />

                </div>
              
            </div>

        </div>
    )
}

export default Home;