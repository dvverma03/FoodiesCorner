import React, { useState } from "react";
import ItemList from "./itemList";
const RestaurentItemCategory = ({ rest}) => {
  const [isClicked, setIsClicked]=useState(false);
    const handleClick=()=>{
      setIsClicked(!isClicked);
  }
  return (
    <div className="flex-1">
      <div className="w-5/6 md:w-6/12  bg-slate-50 mx-auto my-2 shadow-lg p-6">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {rest.title}({rest?.itemCards?.length})
          </span>
          <span>{"🔽"}</span>
        </div>
        {isClicked && <ItemList key={rest?.title} data={rest.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurentItemCategory;
