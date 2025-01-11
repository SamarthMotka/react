const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="m-4 p-4 w-[200px] border rounded-md bg-slate-100">
      <div className="res-card-img">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/" +
            resData.info.cloudinaryImageId
          }
        ></img>
      </div>
      <h3 className="font-bold text-lg my-2">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h5>{resData.info.avgRating + " stars"}</h5>
      <h5>{resData.info.sla.deliveryTime + " minutes"} </h5>
    </div>
  );
};


export const withpromotedCard = (RestaurantCard) =>{
  return (props) => {
    return(
      <div>
        <label>Promted</label>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  }
}



export default RestaurantCard;
