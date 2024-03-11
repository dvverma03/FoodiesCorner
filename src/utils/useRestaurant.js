import { useState, useEffect } from "react";

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
  
  const index= isMobile?2:0

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.5015877&lng=80.307915&restaurantId=" +
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D26.5015877%26lng%3D80.307915%26restaurantId%3D" +
        id 
    );
    const json = await data.json();
    console.log(json?.data)
    setRestaurant(json?.data?.cards[index]?.card?.card?.info);
  }
  return restaurant;
};

export default useRestaurant;
