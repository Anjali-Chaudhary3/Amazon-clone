import React from "react";
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";

//optional chaining
function Checkout() {
  const [ { basket,user } ,dispatch]=useStateValue();
console.log("this is basket 2",{basket});
    return ( 
        <div className="checkout">
         <div className="checkout__left">
            <img
            className="checkout__ad"
            src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/4/AmazonStores/A21TJRUUN4KGV/09b03944d82afe8b145811cf1ae8cad5.w3000.h600._CR0%2C0%2C3000%2C600_SX840_.jpg"
            alt="add"
            
            />
           
         <div >
         <h3>hello {user?.email}</h3>
           <h2 className="checkout__title"> 
           Your Shopping Basket</h2>
           {/* <Ba+sketItems /> */}
           {basket.map((item)=>(
            <CheckoutProduct 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
           ))}

         </div>
          </div>
          <div className="checkout__right">
            <Subtotal />
          </div>
            
        </div>
    );
    }
    
export default Checkout;