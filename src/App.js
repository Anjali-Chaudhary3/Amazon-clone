import react, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import Payment from './Payment1';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
import Checkout from './Checkout';
import Login from './Login'
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
const promise=loadStripe('pk_test_51ODMkNSAFI3WXksR2TUECHlDsSfvX7HmpPOuOvVPr0KCdwmhF0ZCeYKdZI2cgKWAidUraTn9cDsoy0j28igiJ6SJ00z5rWbf6t');

function App() {
  const [{}, dispatch] = useStateValue(); 
  useEffect(()=>{
    //if statement of react
//will only run once when the app component loads..
 auth.onAuthStateChanged(authUser=>{
  console.log('THE USER IS >>>',authUser);
  if(authUser)
  {
    //the user was just logged in /the user was logged in 
     dispatch({
      type:'SET_USER',
      user: authUser
     })
  }
  else{
     dispatch({
      type:'SET_USER',
      user:null
     })
    //the user has logged out
  }
 })
  },[])
  return (
    <Router>
      <div className="app">
      <Header></Header>
	  <Routes>  
                <Route path="/checkout" 
                  element= { <Checkout /> } />
                 
                
               <Route path='/'
                  element={<Home />} />

               <Route path='/login'
               element={<Login />}
              > </Route>
               
               <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
              <Route path='/orders' 
              element={<Orders />}>
              </Route>
				  </Routes>

      </div>
     </Router>
  );
}

export default App;
