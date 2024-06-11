import { useState } from "react";

function Restaurantcard({ restdata }) {
  const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="restcard">
      <img
        className="reslogo"
        src={CDN_URL + restdata.info.cloudinaryImageId}
      />
      <h3>{restdata.info.name}</h3>
      <h4>{restdata.info.cuisines.join(",")}</h4>
      <h4>{restdata.info.avgRatingString}</h4>
      <h4>{restdata.info.sla.deliveryTime} minutes</h4>
    </div>
  );
}

export default Restaurantcard;
