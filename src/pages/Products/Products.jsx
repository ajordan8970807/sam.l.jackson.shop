import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Products.scss";
import List from '../../components/List/List';
import useOne from "../../hooks/useOne";

const Products = () => {
  const catId = parseInt(useParams().id);
    // const param = useParams() will return a string, need to convert to an intger, changed to: const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const {data, loading, error} = useOne(`/sub-categories?[filters][categories][id][$eq]=${catId}`);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked 
    ? [...selectedSubCats, value] 
    : selectedSubCats.filter((item) => item !== value)
    );
  };

  console.log(selectedSubCats);

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Products Categories</h2>
          {data && data.map((item) => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" i={item.id} value={item.id} />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
            ))}          
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={5000} onChange={(e)=>setMaxPrice(e.target.value)}/>
                {/* whenever range input has a change, onChange will update the max price */}
            <span>{maxPrice}</span>
          </div>
        </div>

        <div className="filerItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={(e) => setSort("desc")}/>
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>

      <div className="right">
        <img className='catImg' 
        src="https://realscreen.com/wp/wp-content/uploads/2019/03/samuel-l-jackson-enslaved.png"
        alt="" />
        
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  )
}

export default Products