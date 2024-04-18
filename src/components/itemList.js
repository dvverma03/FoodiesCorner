import React from "react";
import { IMG_CDN_URL } from "./constant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ data }) => {
 const dispatch= useDispatch();
  const handaleCart=(item)=>{
     dispatch(addItems(item))
  }

  return (
    <div className="m-2">
      {data.map((item) => (
        <div
          className="p-2 my-4 border-b-2 border-black text-left md:flex"
          key={item?.card?.info?.id}
        >
          <div className="w-9/12">
            <div className="text-xl font-bold">
              <span>{item?.card?.info?.name}</span>
              <span>
                 {" "}₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice
                  / 100}
              </span>
            </div>
            <p>{item?.card?.info?.description}</p>
          </div>
          <div className="md:w-3/12 ">
            <div className="absolute">
              <button className="bg-gray-500 text-white px-2 py-1 rounded font-bold " onClick={()=>handaleCart(item)} >
                ADD +
              </button>
            </div>
            <img
              className=" h-24 w-36 m-1"
              src={IMG_CDN_URL + item?.card?.info?.imageId}
              alt=""
              srcset=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
