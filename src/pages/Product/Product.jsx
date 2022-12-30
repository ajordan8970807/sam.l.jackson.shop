import React from 'react';
import {useState} from 'react';
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://i.pinimg.com/originals/c0/79/6b/c0796b4fb706f1eb86658dd5c6fd8885.jpg",
    "https://i.imgflip.com/1umkno.jpg"
  ];

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e)=> setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
          <div className="mainImg">
            <img src={images[selectedImg]} alt="" />
          </div>
      </div>


      <div className="right">
        <h1>"Where Is My Super Suit?!"</h1>
        <span className='price'>$3750</span>
        <p>
          Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.<br/>
          - Jules, Pulp Fiction
        </p>
        <div className="quantity">
          <button onClick={()=>setQuantity((prev)=>prev === 1 ? 1 : prev-1)}>-</button>
            {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>

        <button className="add">
          <AddShoppingCartIcon />Throw It In The Bag
        </button>

        <div className="links">
          <div className="item">
            <FavoriteBorderIcon />Window Shopping List
          </div>
          <div className="item">
            <BalanceIcon />Compare
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: Suit</span>
          <span>Tags: Men, Suit, Pants, Jacket</span>
        </div>

        <div className='info'>
          <span>Description</span>
            <hr/>
          <span>Additional Information</span>
            <hr/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product