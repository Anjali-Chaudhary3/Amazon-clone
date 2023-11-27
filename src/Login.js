import React,{useState} from 'react'
import { Link } from "react-router-dom";
import "./Login.css";
// import { Button } from '@mui/material';
import {auth} from './firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { useHistory } from "react-router-dom";
import { NavLink, useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
 

function Login() {
    // let history=useHistory();
    const navigate = useNavigate();
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const signIn=e=>{
        e.preventDefault() ;
        console.log("i have succesfully signin");
        signInWithEmailAndPassword(auth, email, password)
        .then((auth => {
            navigate("/");
        }))
        .catch(error => alert(error.message))
        //some fancy firebase login shittt
    }
    const register=e=>{
        e.preventDefault();
    
        createUserWithEmailAndPassword(auth,email,password) 
        .then((auth)=>{
            //it successfuly created a new user with wmail and password
            console.log(auth);
            if(auth)
            {
                navigate("/");
            }
        })
        .catch(error=>alert(error.message))
         //some fancy firebase register shittt

    }
  return (
    <div className='login'>
        <Link to='/'>
            <img className="login__logo"
            src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
            />
        </Link> 
        <div className='login__container'>
            <h1>Sign-In</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e=>setemail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e=> setpassword(e.target.value)} 
                    // onChange={e=> setemail(e.target.value            
                            //    )}
                />
                <button onClick={signIn} type='submit'
                className='login__signinbutton' >Sign In</button>
                {/* *** */}
            </form> 
            <p>
                By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button onClick={register} className='login__registerbutton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login