import { useContext, useEffect, useState } from "react";
import RestaurantCard, { WithPromotedLabel } from "./restaurantcard";
import { Link } from "react-router-dom";
import { filterdata } from "../utils/helper";
import React, { useState, useEffect } from "react";
import userContext from "../utils/userContext";
import axios from "axios";
import Header from "./header";
import ImgLoadingOverlay from "./ImgLoadingOverlay";
var cors = require('cors');

const filterData = (searchTerm, restaurants) => {
  return restaurants?.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

const Body = () => {
  const [searchBtn, setSearchBtn] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { loginUser, setUserName } = useContext(userContext);


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

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    try {

      const URL = "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Fis-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING%26lat=25.5940947&lng=85.1375645";
      const index = isMobile ? 2 : 1;
      const response = await axios.get(URL);
      const data = response.data;

      const restaurants = data?.data?.cards[index]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      // console.log(data)
      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const RestaurentWithPromoted = WithPromotedLabel(RestaurantCard);

  const handleSearch = () => {
    const data = filterdata(searchBtn, allRestaurants);
    setFilteredRestaurants(data);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchBtn(value);
    const data = filterdata(value, allRestaurants);
    setFilteredRestaurants(data);
  };

  if (!allRestaurants || allRestaurants?.length === 0) {
    return <ImgLoadingOverlay />;
  }

  return (
    <>
      <Header />
      <div className="searchBar">
        <input
          type="text"
          className="search-input px-4 py-2 mx-2 my-1 border-0 hover:outline-0"
          placeholder="Search your restaurant"
          value={searchBtn}
          onChange={handleInputChange}
        />
        <button
          className="search-btn round-full px-4 py-2 rounded-md border-0"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-between">
        {filteredRestaurants.length === 0 ? (
          <div className="w-screen h-screen">
            <div className="w-screen text-3xl font-bold my-4 text-center">No Restaurants matched with this name. Please search something different</div>
            <img className="w-screen h-[550px]" src="https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg" alt="" srcSet="" />
          </div>
        ) : filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              {restaurant?.info?.promoted ? <RestaurentWithPromoted {...restaurant?.info} /> : <RestaurantCard {...restaurant.info} />}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;