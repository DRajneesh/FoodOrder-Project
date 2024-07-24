import React from 'react';
import { FaRupeeSign } from "react-icons/fa";

export default function FoodItem() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounded">
            <img src="https://b.zmtcdn.com/data/dish_photos/6ca/ee177c100b992feafb4de08b6e1096ca.jpg?fit=around|130:130&crop=130:130;*,*" alt="Raj Kachori" className="card-img top mx auto" />
            {/* Heading and description */}
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">Raj Kachori</h5>
                <p className="fooditem_des">Raj Kachori has crispy fried shells filled with potatoes, yogurt, boiled lentils,spices, chutney & more! It's the the ultimate Indian chaat!</p>
                <p className="card-text">
                <FaRupeeSign /> 180
                <br />
                </p>
                <button type='button'  id='cart_btn'  className="btn btn-primary d-inline ml-4">Add to Cart</button>
                <br />
                <p>
                    Status:{" "}
                     <span 
                     id="stock_status" 
                     className={10>5 ? "greenColor" : "redColor"}
                     >
                        {10>5?"In Stock" : "Out of Stock"}
                        </span> 
                        </p>
            </div>
        </div>
    </div>
      

  )
}
