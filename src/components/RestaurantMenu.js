import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex,setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards, carouselItems, carousel, categories } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categoriess =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      const type = c.card?.card?.["@type"];
      return (
        type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        // type ===
        //   "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel" ||
        // type ===
        //   "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );
    });


  // const allItems = [
  //   ...(itemCards || []),
  //   ...(carouselItems || []), // make sure carouselItems is an array of items
  //   ...(carousel || []),
  //   ...(categories || []),
  // ];
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div>
        {categoriess.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={()=>setShowIndex(index)}

          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;