import { useState } from "react";
import RestaurantItemList from "./RestaurantItemList";

const RestaurantCategory = (data,showItems,setShowIndex) => {
  const ItemList = data?.data?.itemCards;

  const handleClick = () => {
    setShowIndex();
    // showItems ? setShowItems(false) : setShowItems(true);
  };

  return (
    <div>
      <div className=" w-10/12 my-2 bg-gray-50 shadow-lg p-3 mx-auto">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg p-2 ">
            {data?.data?.title} {data.data?.itemCards.length}
          </span>
          <span>^</span>
        </div>  
        { (
          <RestaurantItemList items={ItemList}></RestaurantItemList>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
