const RestaurantItemList = ({ items }) => {
//   console.log(items[1].card.info);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id}>
          <div className=" border-gray-300 border-b-2 bg-gray-200 p-2  flex flex-row">
            <div className="w-9/12 flex flex-col p-4 ">
              <span className="text-start font-bold text-lg py-1">
                {item.card.info.name}
              </span>
              <span className="text-start font-bold ">
                RS {item.card.info.defaultPrice / 100}
              </span>
              <span className="text-start font-bold ">
                Rating {item.card.info.ratings.aggregatedRating.rating}
              </span>
              <span className="text-start text-sm">
                {item.card.info.description}
              </span>
            </div>
            <div className="w-3/12 ">
              <div className="absolute mx-auto">
                <button className="bg-white px-4 py-2 border rounded-lg">
                  Add+
                </button>
              </div>

              <img
                className="p-2"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/" +
                  item.card.info.imageId
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantItemList;
