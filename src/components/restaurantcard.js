import { IMG_CDN_URL } from "./constant";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  locality,
  costForTwo,
  cuisines,
  avgRating,
  availability,
}) => {
  const isAvailable = availability && availability.opened;

  const cardStyle = {
    opacity: isAvailable ? 1 : 0.5,
    filter: isAvailable ? "none" : "grayscale(100%)",
  };

  return (
    <div
      className="m-2 w-80 p-4 hover:border-2 box-border rounded-md"
      style={cardStyle}
    >
      <img className="h-56 w-80 " src={IMG_CDN_URL + cloudinaryImageId} alt={name}></img>
      <div className="py-1 font-bold h-8 overflow-hidden">{name}</div>
      <div className="font-medium h-[30px] overflow-hidden">
        {cuisines?.join(",")}
      </div>
      <div className="flex justify-between mx-[5px]">
        <div className="text-[15px] font-bold">{avgRating}✳️</div>
        <div>{locality}</div>
      </div>
      <div className="bg-sky-200 my-1 text-center rounded-md py-1 font-medium">
        {costForTwo}
      </div>
    </div>
  );
};

export const WithPromotedLabel = ({ Restaurantcard }) => {
  return (props) => {
    return (
      <div>
        <span className="bg-black text-white absolute py-2 px-1 m-4 rounded-r-sm w-40">
          Promoted
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
