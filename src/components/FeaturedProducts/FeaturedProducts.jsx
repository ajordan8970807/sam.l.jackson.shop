import React from 'react';
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useOne from "../../hooks/useOne";

const FeaturedProducts = ({ type }) => {
    const {data, loading, error} = useOne(`/products?populate=*&[filters][type][$eq]=${type}`);
                //*****const & useEffect below end up being replaced by the const info in the useFect file*****
    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish fontina taleggio the big cheese macaroni cheese port-salut. Edam fromage lancashire feta caerphilly everyone loves chalk and cheese brie. Red leicester parmesan cheese and biscuits cheesy feet blue castello cheesecake fromage frais smelly cheese.
                </p>
            </div>

            <div className="bottom">
                {error 
                ? "Something went wrong!"
                :(loading 
                ? "loading"
                :data && data.map((item) => 
                    <Card item={item} key={item.id} />)
                )};
        </div>
    </div>
  )
};

export default FeaturedProducts;