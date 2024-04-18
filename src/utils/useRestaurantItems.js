import { useState, useEffect } from "react";
import { Swiggy_RESTAURANT_API } from "../components/constant";

const useRestaurantItem = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        Swiggy_RESTAURANT_API +
          id
      );
      const json = await data.json();
      const mainMenuItems=json;
        setRestaurant(mainMenuItems);
    } catch (error) {
      console.error("Error fetching restaurant info:", error);
    }
  }
  return restaurant;
};

export default useRestaurantItem;
