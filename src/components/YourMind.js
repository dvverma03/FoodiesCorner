import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./header";
import { IMG_CDN_URL } from "./constant.js";
import ImgLoadingOverlay from "./YoumindShimmer.js";
import { Link } from "react-router-dom";

const YourMind = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    try {
      const URL =
        "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9351929%26lng%3D77.62448069999999%26page_type%3DDESKTOP_WEB_LISTING";
        // "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Fis-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING%26lat=25.5940947&lng=85.1375645";
      const response = await axios.get(URL);
      const data =
        response?.data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
          ?.info;
      setDetails(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  if (!details ){
    return <ImgLoadingOverlay />;
  }

  return (details?.length == 0) ? (
    <ImgLoadingOverlay/>
  ) : (
    <>
      <Header />
      <div className="flex flex-wrap m-2">
        {details.map((e, index) => (
          <div key={index} className="m-4 w-[180px]">
            <Link to="/">
            <div className="w-48 h-48 rounded-full overflow-hidden hover:border-2">
              <img className="w-56 h-40 " src={IMG_CDN_URL + e.imageId} alt={`Restaurant ${index}`} />
            </div>
            <div className="text-center pt-[-10px] text-2xl font-bold">{e.action.text}</div>
            </Link>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default YourMind;
