import React from 'react'
import "./Subtotal.css";
// import { Link, Navigate ,NavLink} from "react-router-dom";
import {  useNavigate } from "react-router-dom";
// import CurrencyInput from 'react-currency-input-field';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
// import Payment from './Payment1'


function Subtotal() {
  const navigate = useNavigate();
  // .dispatch
  const [ { basket } ,]=useStateValue();
  console.log("this is basket 2",{basket});
  return (
    <div className='subtotal'>
    {/* <CurrencyFormat */}
            renderText={(value)=>(      
              <>
            <p>
                Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
                <input type="checkbox" />
                This order contains a gift
            </small>
              </>
         )}  
        decimalsLimit={2}
        onValueChange={getBasketTotal(basket)}
        displayType={'text'}
        decimalSeparator={true}
        prefix={"$"}
        {/* />  */}
       <button onClick={() => navigate('/payment')}>Proceed to checkout</button>

       {/* <button onClick={e=>navigate('/payment')}>Proceed to checkout</button> */}
    </div>
  )
}

export default Subtotal;