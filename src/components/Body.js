import RestaurantCard, {withpromotedCard} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { swiggyApi } from "../utils/constants";


const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromted = withpromotedCard(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(swiggyApi);

    const json = await data.json();
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const OnlineStatus = useOnlineStatus();

  if(OnlineStatus === false){
    return(
      <div>
        <h1>You are Offline check your Connection</h1>
      </div>
    );
  }


  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }
  
  return (
    <div className="body">
      <div className="filter">
        <div className="search m-2 p-2">
          <input
            type="text"
            className="p-2 border border-solid rounded-md border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
                const filteredRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                setFilteredRestaurant(filteredRestaurant);
            }}
            className="p-2 px-5 mx-1 bg-green-300 rounded-md"
          >
            Search
          </button>
        
        <button
          className="p-2 px-4 m-2 border border-solid bg-blue-100 rounded-md"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
              
            );
            setListOfRestaurant(filteredList);
          }}
          >
          Top Rated Restaurant
        </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
            {restaurant.info.promoted? <RestaurantCardPromted resData={restaurant}></RestaurantCardPromted> : <RestaurantCard resData={restaurant} />}
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
