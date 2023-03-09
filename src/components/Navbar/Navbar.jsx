import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from '../Cart/Cart';

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="navbar">
      <div className="wrapper">

        <div className="left">
          <div className="item">
            <img src="/img/icons8-american-32.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
            <div className="item">
              <span>USD</span>
              <KeyboardArrowDownIcon />
            </div>
            <div className="item">
              <Link className="link" to="/products/1">Runway</Link>
            </div>
            <div className="item">
              <Link className="link" to="/products/2">Movie</Link>
            </div>
            <div className="item">
              <Link className="link" to="/products/3">Accessories</Link>
            </div>
        </div>

        <div className="center">
          <Link className="link" to="/">MFWear</Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">Home Page</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <Person2OutlinedIcon />
            <FavoriteOutlinedIcon />
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              {/* upon a click, if its True it will be 'false', and if it's False then it'll be 'true'; essentially whether the cart is opened on the page or not */}
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
          {/* && is used logically when both parts are true */}
    </div>
  )
}

export default Navbar