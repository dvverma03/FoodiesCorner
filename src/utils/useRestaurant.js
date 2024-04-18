import { useState, useEffect } from "react";
import { Swiggy_RESTAURANT_API } from "../components/constant";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

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
  
  const index= isMobile?2:2

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      Swiggy_RESTAURANT_API
        + id 
    );
    const json = await data.json();
    console.log(json?.data)
    setRestaurant(json?.data?.cards[index]?.card?.card?.info);
  }
  return restaurant;
};

export default useRestaurant;
