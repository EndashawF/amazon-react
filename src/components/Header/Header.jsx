import React from 'react'
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from './LowerHeader';
import { BiCart } from "react-icons/bi";

function Header() {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* logo section*/}
          <div className={classes.logo_container}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          
            {/* search section*/}
            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" />
              <BsSearch size={25} />
            </div>
            {/* other section */}
            <div className= {classes.order_container}>
              
                <a href="" className={classes.language}>
                  <img
                    src="https://media.istockphoto.com/id/1420904901/vector/specification-perfect-correct-dimension-official-american-flag-red-white-blue-stripes.jpg?s=1024x1024&w=is&k=20&c=LDGu9UTa-LmTZbK-sAvr5a_G4UC043w2HKcpAP9nr-Q="
                    alt=""
                  />
                  <select name='' id=''>
                    <option value="">EN</option>
                  </select>
                </a>
             
             
              <a href="">
                
                  <p>Sign In</p>
                  <span>Account & Lists</span>
                
              </a>
              
              <a href="">
                <p>returns</p>
                <span>& Orders</span>
              </a>
             
              <a href='' className={classes.cart}>
                <BiCart size ={40}/>
                <span>0</span>
              </a>
            </div>
          
         
        </div>
      </section>
      <LowerHeader/>
    </>
  );
};

export default Header
