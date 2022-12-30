import React from 'react';
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img: "https://cdn3.whatculture.com/images/2014/01/samuel-l-jackson-pulp.jpg",
            img2: "https://i.pinimg.com/564x/0c/7c/55/0c7c550a1cec5ff2ffeb17fcf9f57748.jpg",
            title: "Alpaca Hack Ya",
            isTrue:true,
            oldPrice: 200,
            price: 50
        },
        {
            id: 2,
            img: "https://i.pinimg.com/originals/2d/9f/b6/2d9fb667e06cbf7e5b7dcbeb0e0433c9.jpg",
            img2: "https://www.indiewire.com/wp-content/uploads/2017/08/the-hitman-s-bodyguard-ryan-reynolds-samuel-l-jackson-nel-poster-ufficiale-v4-290108.jpg",
            title: "Alpaca Hack Ya Again",
            isTrue:true,
            oldPrice: 2500,
            price: 500
        },
        {
            id: 3,
            img: "https://www.slashfilm.com/img/gallery/the-25-best-samuel-l-jackson-performances-ranked/l-intro-1651530978.jpg",
            img2: "https://images.immediate.co.uk/production/volatile/sites/3/2018/04/Nick-Fury-c828204-e1601118797407.jpg?quality=90&resize=620,413",
            title: "Alpaca Hack Ya Again",
            isTrue:true,
            oldPrice: 2500,
            price: 500
        },
        {
            id: 4,
            img: "https://spy.com/wp-content/uploads/2017/08/samuel-l-jackson-movies.jpg",
            img2: "https://i.pinimg.com/originals/59/cf/20/59cf20760e80e36bbbfd13752355588c.jpg",
            title: "Alpaca Hack Ya Again",
            isTrue:true,
            oldPrice: 2500,
            price: 500
        }
    ];

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>
            Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish fontina taleggio the big cheese macaroni cheese port-salut. Edam fromage lancashire feta caerphilly everyone loves chalk and cheese brie. Red leicester parmesan cheese and biscuits cheesy feet blue castello cheesecake fromage frais smelly cheese.
            </p>
        </div>


        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts