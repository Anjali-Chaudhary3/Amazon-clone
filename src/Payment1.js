import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import { Link,useNavigate } from 'react-router-dom';      
import { useState,useEffect } from 'react';
import { CardElement,useStripe, useElements } from '@stripe/react-stripe-js';                                            
import { getBasketTotal } from './Reducer';
// import {CurrencyFormat} from 'react-curreny-format'
import  axios  from './Axios';
import {db} from './firebase'
function Payment() {
  
  const navigate = useNavigate();

  const [{basket,user},dispatch]=useStateValue();
  const stripe=useStripe();
  const elements=useElements();
  // const secret='sk_test_51ODMkNSAFI3WXksRj7rz2PEcluI2ZFs2YGyIavpqMkwJHGyuW3RnxiOrQpz6fCHqDqhsvnJcTzmtjRDw2pJ7xpTp00AMMQPiMm';
  const [succeeded,setSucceeded]=useState(false);
  const [processing,setProcessing]=useState("")
  const [error,setError]=useState(null);
  const [disabled,setDisabled]=useState(true);
  const [clientSecret,setClientSecret]=useState(true);

  useEffect(()=>{
  //  generate the special stripe secret which alows us to chrge a customer
  const getClientSecret = async () => {
    try {
        const response = await axios.post('/payment/create', {
            total: getBasketTotal(basket) * 100
        });
        console.log('Server Response:', response.data);
        setClientSecret(response.data.clientSecret);
    } catch (error) {
        console.error('Error fetching client secret:', error);
    }
};
    getClientSecret();
    //post,get request
  },[basket])
  console.log('secret is ',clientSecret);


  const handleSubmit= async (event)=>{
//fancy stripe work
       event.preventDefault();
       setProcessing(true);
       console.log("ok till here ",clientSecret);
      //  console.log('Server Response:', response.data);
      //  console.log('data Response:',response.data.clientSecret);
       try{
        const payload= await stripe
        .confirmCardPayment(clientSecret,{
        payment_method:{
          card:elements.getElement(CardElement)
        }
        }).then(({paymentIntent})=>{
          // paymentintent=paymentconfirmation
          
          db
             .collection('users').doc(user?.id)
             .doc(user?.uid)
             .collection('orders')
             .doc(paymentIntent.id)
             .set({
              basket:basket,
              amount:paymentIntent.amount,
              created:paymentIntent.created
             })
          setSucceeded(true);
          setError(null);
          setProcessing(false);
          dispatch({
            type:'EMPTY_BASKET'
          })
          navigate.replace("/orders")
        })}
        catch(error)
          {
              console.error('Error confirming card payment:', error);
              setSucceeded(false);
              setError(`Payment failed: ${error.message}`);
              setProcessing(false);
          }
       const payload= await stripe
  }
 const handleChange=event=>{
       setDisabled(event.empty);
       setError(event.error ? event.error.message :"");
       
      }
  return (
    <div className='payment'>
       <div className='payment__container'>
       {/* payment section-delivery address */}
                <h1>
                      Checkout
                    ( <Link to ="/checkout">
                        {basket?.length} items
                      </Link>)
                </h1>
        <div className='payment__section'>
                <div className='payment__title'>
                  <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                  <p> {user?.email}</p>
                  <p> 123 React Lane</p>
                  <p> Los Angeles, CA</p>
                </div>
            </div>
        {/* payment section -review items */}
        <div className='payment__section'>
            <div className='payment__title'>
                  <h3>Review items and delivery</h3>
            </div>
            <div className='payment__items'>
              {/* ?al products */}
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
        {/* payment section-payment method */}
        <div className='payment__section'>
              <div className='payment__title'>
                <h3>Payment Method</h3>
              </div>
              <div className='payment__details'>
                {/* stripe magic */}
                <form onSubmit={handleSubmit}>
                {/* <h1>Payment Card</h1> */}
                  <CardElement onChange={handleChange}/>
                  <div className='payment__priceContainer'>
                    <h3>Order Total: $12</h3>
                  {/* <CurrencyFormat
                      renderText={(value) => (
                        <>
                          <h3>Order Total: {value}</h3>
                        </>
                      )}
                      decimalScale={2}
                      value={getBasketTotal(basket)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    /> */}
                    <button
                    disabled={processing || disabled ||succeeded}>
                      <span>
                        {processing ? <p>Processing</p>:
                        "Buy Now"}
                      </span>
                    </button>
                  </div>
                  {/* error */}
                  {error && <div>{error}</div>}
                </form>

              </div>
        </div>
       </div>
    </div>
  )
}

export default Payment