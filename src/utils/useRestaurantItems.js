import { useState, useEffect } from "react";

const useRestaurantItem = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D12.9351929%26lng%3D77.62448069999999%26restaurantId%3D" +
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
