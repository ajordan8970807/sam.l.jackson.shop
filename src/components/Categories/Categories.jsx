import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://thumbs.gfycat.com/FrailHollowDuckling-size_restricted.gif"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://i.pinimg.com/originals/48/cd/9e/48cd9eb5082aa3d775fea74085a62723.gif"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Red Carpet
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://media.tenor.com/wEt6BhusryIAAAAC/stare-sam-jackson.gif"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://media.tenor.com/bn3vwQSMb3YAAAAC/hitmans-bodyguard-hitmans-bodyguard-gifs.gif"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Movie
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://i.gifer.com/MDV.gif"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://media.tenor.com/cOIkDPFJGNEAAAAC/hitmans-bodyguard-samuel-l-jackson.gif"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;