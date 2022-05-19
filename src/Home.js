
import React from "react";
import "./Home.css";
import Product from "./Product";
import "./Home.css";
import myImage1 from './images/img5.jpg';
import myImage2 from './images/img1.jpg';
import myImage3 from './images/img2.jpg';
import myImage4 from './images/img3.jpg';
import myImage5 from './images/img4.png';
import myImage7 from './images/crotchless-lingerie.jpg';
import myImage8 from './images/handcuffs.jpg';
import myImage9 from './images/sexy.png';
import myImage6 from './images/img6.jpg';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={myImage1}
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Clitoris Vibrator"
            price={1200}
            rating={5}
            image={myImage2}
          />
          <Product
            id="49538094"
            title={'Premium exclusive Dildo'}
            price={2500.0}
            rating={4}
            image={myImage3}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title={"Premium Clitoral Suction Vibrator"}
            price={3199.99}
            rating={3}
            image={myImage4}
          />
          <Product
            id="23445930"
            title={"Sexy Lingerie Underwear"}
            price={1200.00}
            rating={5}
            image={myImage6}
          />
          <Product
            id="3254354345"
            title="Sexy crotchless lingerie Stockings"
            price={598.99}
            rating={4}
            image={myImage7}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Black Erotic Handcuffs"
            price={1094.98}
            rating={4}
            image={myImage8}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;