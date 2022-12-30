import React from 'react';
import "./Cart.scss";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {

  const data = [
    {
      id: 1,
      img: "https://media.vanityfair.com/photos/58f0c6330ba2cf01fc200961/1:1/w_601,h_601,c_limit/Screen%20Shot%202017-04-14%20at%208.46.07%20AM.png",
      title: "SLJ Style",
      desc: "Authentic",
      isNew:true,
      oldPrice: 5000,
      price: 3750,
    },
    {
      id: 2,
      img: "https://cdna.artstation.com/p/assets/images/images/006/673/342/large/jinsung-lim-img-1216.jpg?1500380701",
      title: "SLJ Style",
      desc: "Authentic",
      isNew:true,
      oldPrice: 5000,
      price: 3750,
    },
  ];

  return (
    <div className='cart'>
      <h1>Stuff In Your Bag</h1>
        {data?.map(item=>(
          <div className="item" key={item.id}>
            <img src="{itm.img" alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0, 100)}</p>
                  {/* using subString method as the full desc isn't needed; first 100 chars should do for the small vers of cart */}
              <div className="price">1 x ${item.price}</div>    
            </div>
            <DeleteOutlineIcon className='delete' />
          </div>
        ))}
        <div className="total">
          <span>SUBTOTAL</span>
          <span>$3750</span>
        </div>
        <button>Gon'head To The Register</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart