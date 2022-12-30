import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F61de82d0-0420-11e7-976a-0b4b9a1a67a3.jpg?crop=3985%2C2657%2C524%2C781",
    "https://www.mercurynews.com/wp-content/uploads/2017/08/24jackson2.jpg?w=571",
    "https://www.giantfreakinrobot.com/wp-content/uploads/2021/09/samuel-l-jackson-nick-fury-900x506.jpg"
  ];
  
  const prevSlide = () =>{
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  }
  const nextSlide = () =>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  }

  return (
    <div className="slider">
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src= {data[0]} alt="" />
            <img src= {data[1]} alt="" />
            <img src= {data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlinedIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlinedIcon />
            </div>
        </div>
    </div>
  );
};

export default Slider;