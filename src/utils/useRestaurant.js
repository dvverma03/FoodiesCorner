import { useState, useEffect } from "react";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.5015877&lng=80.307915&restaurantId=" +
        id 
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }
  return restaurant;
};

export default useRestaurant;
