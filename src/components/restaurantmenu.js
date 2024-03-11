import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constant";
import useRestaurant from "../utils/useRestaurant";
import useRestaurantItem from "../utils/useRestaurantItems";
import RestaurentItemCategory from "./restaurentItemCategory";
import Header from "./header";

const RestaurantMenu = () => {
  const param = useParams();
  const { id } = param;
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the threshold as needed

  // Use useEffect to update the device type on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const restaurant = useRestaurant(id);
  const Menu = useRestaurantItem(id);
  const index= isMobile?5:2
  const mainMenu =
    Menu?.data?.cards[index]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e?.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const [islogin, setIslogin] = useState(false);

  return (
    <>
    <Header/>
      <div className=" ml-6 md:flex md:justify-around">
        <img
          className="w-[100%] pl-10 ml-4 md:w-[500px]  relative right-16 py-6"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt="Restaurant"
        />
        <div className="text-xl relative right-4 py-6 ">
          <h3 className="text-4xl font-bold">{restaurant?.name}</h3>
          <h1 className="text-3xl font-semibold ">
            Restaurant Id: {restaurant?.id}
          </h1>
          <h4 className="text-2xl font-medium ">{restaurant?.locality}</h4>
          <h4 className="text-xl font-thin">{restaurant?.areaName}</h4>
          <h4 className="my-2"> Rating <span className="my-2 px-2 py-1 bg-[#66cc52] rounded">{restaurant?.avgRating}⭐</span></h4>
          
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold px-2 text-center">Menu Category</h1>
        {mainMenu && mainMenu.length > 0 ? (
          <ul className="menus_all">
            {mainMenu.map((e, index) => (
              <div key={e?.card?.card?.itemCards?.card?.name} className="flex">
                {<RestaurentItemCategory  rest={e?.card?.card} s/>}
              </div>
            ))}
          </ul>
        ) : (
          <p>Loading menu...</p>
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
