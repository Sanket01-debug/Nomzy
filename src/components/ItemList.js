import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => {
        const food = item?.card?.info || [];
        return (
          <div
            data-testid="foodItems"
            key={food.id}
            className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-3 font-bold">
                <span>{food.name}</span>
                <span> - ₹ {food.defaultPrice / 100 || food.price / 100}</span>
              </div>
              <p className="text-xs">{food.description}</p>
            </div>
            <div className="w-3/12 p-5 relative">
              <div className="absolute">
                <button
                  className="mx-16 p-2 bg-white rounded-lg shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add+{" "}
                </button>
              </div>
              <img src={CDN_URL + food.imageId} className="w-full"></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;