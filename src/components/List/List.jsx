import React from 'react';
import "./List.scss";
import Card from "../Card/Card";
import useOne from "../../hooks/useOne";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const {data, loading, error} = useOne(`/products?populate=*&[filters][categories][id][$eq]=${catId}`);

        // const data = [
        //   {
        //     id: 1,
        //     img: "https://media.gq.com/photos/57769f805e51460c39663788/master/w_1600%2Cc_limit/sam-jackson-pulp-fiction.jpg",
        //     isNew:true,
        //     oldPrice: 5000,
        //     price: 3750,
        //   },
        //   {
        //     id: 2,
        //     img: "https://static01.nyt.com/images/2016/01/17/arts/bagger-jackson/bagger-jackson-superJumbo.jpg",
        //     isNew:true,
        //     oldPrice: 5000,
        //     price: 3750,
        //   },
        //   {
        //     id: 3,
        //     img: "https://hips.hearstapps.com/hmg-prod/images/esq040119toc007-1551981914.jpg?crop=1xw:1xh;center,top&resize=480:*",
        //     isNew:true,
        //     oldPrice: 5000,
        //     price: 3750,
        //   },
        //   {
        //     id: 4,
        //     img: "https://preview.redd.it/3hq2lhiaa4y11.jpg?auto=webp&s=aa240618627257ea9e2643d930ddf28bdfec598b",
        //     isNew:true,
        //     oldPrice: 5000,
        //     price: 3750,
        //   }
        // ]
  return (
    <div className='list'>
      {loading ? "loading" : data?.map(item=>(
        <Card item={item} key={item.id} />
      ))};
    </div>
  );
};

export default List