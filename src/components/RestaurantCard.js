const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <div className="res-card-img">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/" +
            resData.info.cloudinaryImageId
          }
        ></img>
      </div>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h5>{resData.info.avgRating + " stars"}</h5>
      <h5>{resData.info.sla.deliveryTime + " minutes"} </h5>
    </div>
  );
};

export default RestaurantCard;
