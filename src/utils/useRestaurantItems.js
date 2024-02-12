import { useState, useEffect } from "react";

const useRestaurantItem = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
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
