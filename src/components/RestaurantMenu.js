import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { menuApi } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = () => {

  const [showIndex,setShowIndex] = useState(0);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer></Shimmer>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card
      .card;

  const catagories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );



  // console.log(catagories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>

      {/* {console.log(catagories)} */}
      {catagories.map((catagory,index) => (
        <RestaurantCategory
          key={catagory?.card?.card?.title}
          data={catagory?.card?.card}
          showItems={index === showIndex ? true : false }
          setShowIndex = {() =>setShowIndex (index)}
        ></RestaurantCategory>
      ))}
    </div>
  );
};

export default RestaurantMenu;
