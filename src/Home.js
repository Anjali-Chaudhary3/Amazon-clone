import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      {/* <p>im home comp</p> */}
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/July/Apay/Deals-Unrec-PC-3000_2._CB598748121_.jpg"
          alt="img"
        />
        <div className="home__row">
          <Product
            id="1"
            title="The Lean startup"
            price="11.69"
            rating={4}
            image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
            alt="img"
          />
          <Product 
            id="2"
            title="AGARO Royal Stand Mixer 1000W with 5L SS Bowl and 8 Speed Setting I Includes Whisking Cone, Mixing Beater & Dough Hook, and Splash Guard"
            price="239.0"
            rating={4}
            image="https://m.media-amazon.com/images/I/71iDFYr3AIL._AC_UY218_.jpg"
            alt="img"
          />
        </div>
        <div className="home__row">
          {/* product */}
          {/* product */}
          {/* product */}
          <Product 
           id="3"
            title="Apple Watch SE (2nd Gen) [GPS 40 mm] Smart Watch w/Midnight Aluminium Case & Midnight Sport Band. "
            price="199.99"
            rating={3}
            image="https://m.media-amazon.com/images/I/71LfnkRgZ4L._AC_UY218_.jpg" alt="img"
          />
           <Product 
           id="4"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa (Black)"
            price="98.99"
            rating={5}
            image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"alt="img"
          />
           <Product 
           id="5"
            title="Apple 2022 11-inch iPad Pro (Wi-Fi, 512GB) - Space Grey (4th Generation)"
            price="598.0"
            rating={4}
            image="https://m.media-amazon.com/images/I/81gC7frRJyL._AC_UY218_.jpg"alt="img"
          />
        </div>
        <div className="home__row">
        <Product 
           id="3"
            title="Samsung 27-inch(68.6cm) FHD 1000R Curved Monitor, VA, 75 Hz, Bezel Less Design, AMD FreeSync, Speakers, DP, HDMI, Headphone in Port "
            price="1099.99"
            rating={3}
            image="https://m.media-amazon.com/images/I/81lO5ON5c4L._AC_UY218_.jpg"
          />
          </div>
      </div>
    </div>
  );
}

export default Home;