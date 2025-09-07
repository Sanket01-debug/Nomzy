import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const allItems =
    data?.itemCards ||
    data?.carouselItems ||
    data?.carousel ||
    data?.categories ||
    [];

    const handleClick = () =>{
      // SetShowItems(!showItems);
      setShowIndex();
    }
  return (
    
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 bg-gray-100 shadow-lg ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({allItems.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={allItems} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;