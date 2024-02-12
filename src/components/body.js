import { useContext, useEffect, useState } from "react";
import RestaurantCard, {WithPromotedLabel} from "./restaurantcard";
import Schimme from "./schimmie";
import { Link } from "react-router-dom";
import { filterdata } from "../utils/helper";
import React, { useState, useEffect } from "react";
import userContext from "../utils/userContext";
import axios from "axios";


const filterData = (searchTerm, restaurants) => {
  return restaurants?.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

const Body = () => {
  const [searchBtn, setSearchBtn] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const {loginUser, setUserName}=useContext(userContext);

  useEffect(() => {
    getRestaurantData();
  }, []);
  
  async function getRestaurantData() {
    try {
      const URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING&_=" + Date.now();
  
      const response = await axios.get(URL);
      const data = response.data;
  
      const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const RestaurentWithPromoted=WithPromotedLabel(RestaurantCard);

  const handleSearch = () => {
    const data = filterdata(searchBtn, allRestaurants);
    setFilteredRestaurants(data);
  };

  if (!allRestaurants?.length) return null;

  return (allRestaurants?.length == 0) ? (
    <Schimme />
  ) : (
    <>
      <div className="searchBar">
        <input
          type="text"
          className="search-input px-4 py-2 mx-2 my-1 border-0 hover:outline-0"
          placeholder="Search your restaurant"
          value={searchBtn}
          onChange={(e) => {
            setSearchBtn(e.target.value);
          }}
        />
        <button
          className="search-btn round-full px-4 py-2 rounded-md border-0"
          onClick={handleSearch}
        >
          Search
        </button>
        
      </div>
      <div className="flex flex-wrap justify-between">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              {restaurant?.info?.promoted?<RestaurentWithPromoted {...restaurant?.info}/>:<RestaurantCard {...restaurant.info} />}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;