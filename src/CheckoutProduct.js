import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import FlipMove from 'react-flip-move';
import { HideImageRounded } from "@mui/icons-material";
function CheckoutProduct({ id, image, title, price, rating,hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const Removefrombasket = () => {
    //REMOVE THE ITEM FROMIBASKET
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/* <FlipMove></FlipMove> */}
        <div className="checkoutProduct__rating">
        
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
            
        </div>
        {!hideButton && (
          <button onClick={Removefrombasket}>Remove from basket</button>
        )}
       
      </div>
    </div>
  );
}

export default CheckoutProduct;
