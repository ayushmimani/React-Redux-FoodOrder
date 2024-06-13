import { useState } from "react";

function Restaurantcard({ restdata }) {
  const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="w-[250px] m-4 p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={CDN_URL + restdata.info.cloudinaryImageId}
      />
      <h3 className="font-bold text-lg">{restdata.info.name}</h3>
      <h4>{restdata.info.cuisines.join(", ")}</h4>
      <h4>{restdata.info.avgRatingString}</h4>
      <h4>{restdata.info.sla.deliveryTime} minutes</h4>
    </div>
  );
}

export default Restaurantcard;
