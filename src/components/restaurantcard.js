import { IMG_CDN_URL } from "./constant";
 const RestaurantCard=({cloudinaryImageId, name, locality, costForTwo,cuisines})=>{
    return(
        <div className="m-2 w-80 p-4 hover:border-2 box-border rounded-md ">
            <img src={IMG_CDN_URL + cloudinaryImageId}></img>
            <div className="py-1 font-bold h-8 overflow-hidden">{name}</div>
            <div className="font-medium h-[30px] overflow-hidden">{cuisines?.join(",")}</div>
            <div className="restaurantName">{locality}</div>
            <div className="bg-sky-200 my-1 text-center rounded-md py-1 font-medium ">{costForTwo}</div>
            <div></div>
            <div>{}</div>
        </div>
        
    )
  }


  export const WithPromotedLabel=({Restaurantcard})=>{
    return (props)=>{
        return (
         <div>
            <span className="bg-black text-white absolute py-2 px-1 m-4 rounded-r-sm w-40">Promoted</span>
            <RestaurantCard {...props}/>
         </div>
        );
    };
  };

  export default RestaurantCard;